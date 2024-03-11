const request = require('supertest');
const app = require('./index.js');

describe("Policy Routes", () => {
  describe("POST /api/policies/createPolicy", () => {
    test("should respond with a 201 status code", async () => {
      const response = await request(app).post("/api/policies/createPolicy").send({
        policyName: "Test Policy",
        duration: 12,
        premiumAmount: 100,
        totalAmount: 1200,
        paymentFrequency: "Every Month"
      });
      expect(response.statusCode).toBe(201);
    });

    test("should specify json in the content type header", async () => {
      const response = await request(app).post("/api/policies/createPolicy").send({
        policyName: "Test Policy",
        duration: 12,
        premiumAmount: 100,
        totalAmount: 1200,
        paymentFrequency: "Every Month"
      });
      expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
    });

    test("response should have policyId", async () => {
      const response = await request(app).post("/api/policies/createPolicy").send({
        policyName: "Test Policy",
        duration: 12,
        premiumAmount: 100,
        totalAmount: 1200,
        paymentFrequency: "Every Month"
      });
      expect(response.body._id).toBeDefined();
    });
  });

  describe("GET /api/policies/showAllPolicies", () => {
    test("should respond with a 201 status code", async () => {
      const response = await request(app).get("/api/policies/showAllPolicies");
      expect(response.statusCode).toBe(200);
    });

    test("should specify json in the content type header", async () => {
      const response = await request(app).get("/api/policies/showAllPolicies");
      expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
    });

    // Add more specific tests if needed for the response body
  });
});
