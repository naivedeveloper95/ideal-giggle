process.env.NODE_ENV = "local";
const request = require("supertest");
const app = require("../../app");
// for decoding the token and easily extracting the id from the payload
// our global object for storing auth information
describe("GET / parked car details", () => {
    test("without  login try to get data", async () => {
        // don't add an authorization header with the token...see what happens!
        const response = await request(app).get("/api/parked/getdetails");
        expect(response.statusCode).toEqual(200);
    });
});
describe("GET / parked car history", () => {
    test("without  login try to get data", async () => {
        // don't add an authorization header with the token...see what happens!
        const response = await request(app).get("/api/parked/getHistory");
        expect(response.statusCode).toEqual(200);
    });
});
describe("PUT Checkout", () => {
    test("updates the slot to null", async () => {
        const response = await request(app)
            .put("/api/parked/checkout")
            .send({
                id:1
            })
        expect(response).toBe(response);
        expect(response.statusCode).toEqual(200);
    });
});
describe("POST adds bulk data", () => {
    test("alots slot to car", async () => {
        const response = await request(app)
            .post("/api/parked/addbulk")
            .send([
                {regNumber: "KA89YT6767",
                color: "blue",
                slor:90},{
                    regNumber: "KA89YT6867",
                    color: "blue",
                    slor:91}
             ] )
        expect(response).toBe(response);
        expect(response.statusCode).toEqual(200);
    });
});