const request = require("supertest");
const { expect } = require("chai");

const app = require("./app");

describe("Server running", () => { 
  it("responds with json",async() => {
    const res = await request(app)
    .get("/")
    .expect('Content-Type', /json/)
    .expect(200)

    expect(res.body.message).to.equal("Welcome to medi_helper backend");
  });
});