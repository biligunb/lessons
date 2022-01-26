const request = require("supertest");
const app = require("./day5");

describe("Test todo add", () => {
  test("It should response the POST method", done => {
    request(app)
      .post("/add")
      .send({ task: "test task", definition: "test definition" })
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test todo add", () => {
  test("It should response the POST method", done => {
    request(app)
      .post("/add")
      .send({ task: "test task", definition: "test definition" })
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test the root path", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
