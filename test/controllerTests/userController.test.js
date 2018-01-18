process.env.NODE_ENV = 'test';


const Config = require('../../config');
const DATABASE_URL_TEST = require('../../config');
const chai = require("chai");
const chaiHttp = require("chai-http");
const mongoose = require('mongoose');
const expect = chai.expect;
const supertest = require("supertest");


chai.use(chaiHttp);

const app = require("../../server");

const client = supertest.agent(app)

describe("User endpoint", () => {
	it("for CREATE should create a new user on POST.", (done) =>{
		const newUser = {
			"firstName": "JEAN",
			"lastName":"123123",
			"userName":"123123213",
			"email": "c@123123213.com",
			"password":"121231233123"
		}
		client
		.post("/api/users/")
		.send(newUser)
		.end((error, res)=> {
			expect(res).to.have.status(201);
			expect(res.body).to.be.a('Object')
			done();
		});
	});

	it("for READ should return a new user on GET.", () => {
	client		
	.get("/api/users/")
		.end((res)=> {
			expect(res).to.have.status(200);
			expect(res.body.length).to.be.above(0);
		})
	})

	it(`should add update a user's email given an id `, (done) => {
		let user = new newUser({ 
			firstName: "Bonnie",
			lastName: "Jones",
			userName: "bjones",
			email: "bj@gmail.com",
			password: "123123"
		})
		console.log(user)
		.put("/api/users/" + user.id)
		.send({
			firstName: "Bonnie",
			lastName: "Jones",
			userName: "bjones",
			email : "bonnie@gmail.com",
			password: "123123"
		})
		.end((err, res) => {
			expect(res).to.have.status(200);
			expect(res).to.have.property('email').eql("bonnie@gmail.com");
			done();
			})
		})


	// it(`should delete a user on DELETE `, () => {
	// 	return chai.request(app)
	// 	.delete(`/:users/${res.body[0].id}`)
	// 	.end((res) => {
	// 		expect(res).to.have.status(204)
	// 	});
	// });
});

