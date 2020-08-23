const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const server = require("../backend/server");

chai.use(chaiHttp);

// userRoute --> /createAdmin
describe("GET /", function () {
  it("it should has status code 200", function (done) {
    chai
      .request(server)
      .get("/api/users/createadmin")
      .end((err, res) => {
        res.should.have.status(200);
        if (err) done(err);
        done();
      });
  });
});

// productRoute --> call all products for homePage.
describe("GET /", function () {
  it("it should has obejcts", function (done) {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        res.body.should.be.a("object");
        if (err) done(err);
        done();
      });
  });
});

/*
describe("POST /", function () {
  it("sigin user for current user", function (done) {
    chai
      .request(server)
      .post("/signin")
      .send({ email: "elif@example.com", password: "1234" })
      .expect(200)
      .end(function (err, res) {
        res.body.email.should.equal("elif@example.com");
        res.body.password.should.equal("1234");
        done();
      });
  });
});
*/