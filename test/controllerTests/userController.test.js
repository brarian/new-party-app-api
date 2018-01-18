process.env.NODE_ENV = 'test';


const Config = require('../../config');
const DATABASE_URL_TEST = require('../../config');
const chai = require("chai");
const chaiHttp = require("chai-http");
const mongoose = require('mongoose');
const expect = chai.expect;
const supertest = require("supertest");
let User = require('../../models/userModel');

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
			expect(res).to.have.status(204);
			expect(res.body.length).to.be.above(0);
		})
	})

	it(`should update a user's email given an id `, (done) => {
		let user = new User({ 
			firstName: "Bonnie",
			lastName: "Jones",
			userName: "bjones",
			email: "bj@gmail.com",
			password: "123123"
		})
		user.save((err, User) => {
			client
		.put(`/api/users/${user._id}`)
		.send({
			email : "bonnie@gmail.com",
		})
		.end((err, res) => {
			expect(res).to.have.status(204);
			// expect(res.body).to.have.property('email').to.equal("bonnie@gmail.com");
			done();
			})
		})
	})

	it(`should delete a user given an id `, () => {
		let user = new User({ 
			firstName: "Bonnie",
			lastName: "Jones",
			userName: "bjones",
			email: "bj@gmail.com",
			password: "123123"
		})
			user.save((err, User) => {
				client
			.delete(`/api/users/${user._id}`)
			.end((err, res) => {
				expect(res).to.have.status(204);
				done();
			});
		});
	});
});