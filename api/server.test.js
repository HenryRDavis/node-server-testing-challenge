const supertest = require("supertest");
const server = require("./server.js");
describe("server.js", () => {
    describe("GET /", () => {
        it("should return 200 OK", () => {
            return supertest(server)
                .get("/")
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });
        // One way to do this
        it("should have a body", () => {
            return supertest(server)
                .get("/")
                .then(res => {
                    expect(res.body).toEqual({ api: "up" });
                });
        });
        it("should return api & up", () => {
            return supertest(server)
                .get("/")
                .then(res => {
                    expect(res.body.api).toBe("up");
                });
        });
        it("should return JSON", () => {
            return supertest(server)
                .get("/")
                .then(res => {
                    expect(res.type).toMatch(/json/i);
                });
        });
    });
});