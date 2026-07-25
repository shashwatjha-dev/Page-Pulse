const axios = require("axios");
const cheerio = require("cheerio");

const analyzePage = async (url) => {
    try {
        const startTime = Date.now();

        const response = await axios.get(url, {
            timeout: 10000,
            maxRedirects: 5,
            validateStatus: () => true,
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/138.0.0.0 Safari/537.36",
                Accept: "text/html,application/xhtml+xml"
            }
        });

        if (response.status >= 400) {
            throw new Error(`Website returned status ${response.status}`);
        }

        const contentType = response.headers["content-type"] || "";

        if (!contentType.includes("text/html")) {
            throw new Error("The provided URL does not contain an HTML page.");
        }

        const endTime = Date.now();
        const responseTime = endTime - startTime;

        const html = response.data;
        const $ = cheerio.load(html);

        const bodyText = $("body")
            .text()
            .replace(/\s+/g, " ")
            .trim();

        return {
            status: response.status,
            responseTime,

            title: $("title").text().trim() || "Not Found",

            metaDescription:
                $('meta[name="description"]').attr("content") || "Not Found",

            h1Count: $("h1").length,

            imageCount: $("img").length,

            imagesWithoutAlt: $("img:not([alt])").length,

            wordCount: bodyText ? bodyText.split(" ").length : 0
        };
    } catch (error) {
        if (error.code === "ECONNABORTED") {
            throw new Error("Request timed out.");
        }

        throw error;
    }
};

module.exports = {
    analyzePage
};