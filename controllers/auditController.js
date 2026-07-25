const { analyzePage } = require("../services/pageAnalyzer");

const auditWebsite = async (req, res) => {
    try {
        const { url } = req.body;

        // URL Required
        if (!url) {
            return res.status(400).json({
                success: false,
                message: "URL is required"
            });
        }

        // URL Validation
        try {
            new URL(url);
        } catch {
            return res.status(400).json({
                success: false,
                message: "Invalid URL"
            });
        }

        const report = await analyzePage(url);

        return res.status(200).json({
            success: true,
            data: report
        });

    } catch (error) {

        console.error("ERROR:", error);

        if (error.response?.status === 403) {
            return res.status(403).json({
                success: false,
                message: "Website blocked automated requests."
            });
        }

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    auditWebsite
};