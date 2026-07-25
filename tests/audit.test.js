const request = require("supertest");
const app = require("../app");

describe("Page Pulse API", () => {

    test("GET / should return API running message", async () => {
        const res = await request(app).get("/");

        expect(res.statusCode).toBe(200);
        expect(res.body.success).toBe(true);
    });

    test("POST /api/audit without URL should return 400", async () => {
        const res = await request(app)
            .post("/api/audit")
            .send({});

        expect(res.statusCode).toBe(400);
        expect(res.body.success).toBe(false);
    });

    test("POST /api/audit with invalid URL should return 400", async () => {
        const res = await request(app)
            .post("/api/audit")
            .send({
                url: "abcd"
            });

        expect(res.statusCode).toBe(400);
        expect(res.body.success).toBe(false);
    });

});