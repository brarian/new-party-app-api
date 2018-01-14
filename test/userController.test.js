const chai = require("chai");
const chaiHttp = require("chai-http");

const expect = chai.expect;
chai.use(chaiHttp);

const { app } = require("../server");

describe("User endpoint", () => {
	it("for CREATE should create a new user on POST", () =>{
		const newUser = {
			"firstName": "JEAN",
			"lastName":"123123",
			"userName":"123123213",
			"email": "c@123123213.com",
			"password":"121231233123"
		}
		return chai.request(app)
		.post("/")
		.send(newUser)
		.then((res)=> {
			expect(res).to.have.status(201);
			expect(res.body).to.not.equal.apply(null);
			expect(res.body).to.only.include.keys("firstName", "lastName", "userName", "email", "password");
		});
	});

	it("for READ should return a new user on GET", () => {
		return chai.request(app)
		.get("/:id")

	})

});

//finish endpoint tests
