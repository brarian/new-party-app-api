// /* eslint-disable */

// process.env.NODE_ENV = 'test';

// const Config = require('../../config');
// const DATABASE_URL_TEST = require('../../config');
// const chai = require("chai");
// const chaiHttp = require("chai-http");
// const supertest = require("supertest");
// const mongoose = require('mongoose');
// const expect = chai.expect; 
// chai.use(chaiHttp);
// let Party = require('../../models/partyModel');

// const app = require("../../server");

// const client = supertest.agent(app)

// describe("Party endpoint", () => {
// 	it("for CREATE should create a new party on POST.", (done) =>{
// 		const newParty = {
// 			"date": "8-08-2018",
// 			"time": "4:34pm",
// 			"menu":{"protien": "bananas", "drink": "coke"}, 
// 			"subQuestionType": "cocktail", 
// 			"subQuestions":["ok", "ok", "ok"], 
// 			"userId": "a2343422434324",
// 			"name": "the party",
// 			"bigGuestList": ["amy", "james"]
// 		}
// 	  client
// 		.post("/api/party/")
// 		.send(newParty)
// 		.end((error, res)=> {
// 			console.log("response  ====>     ",  res.body);
// 			expect(res).to.have.status(201);
// 			expect(res.body).to.be.a('Object')
// 			done();
// 		});
// 	});

// 	it("for READ should return a party on get.", () => {
// 		client
// 		.get(`/api/party/`)
// 		.end((res)=> {
// 			expect(res).to.have.status(200);
// 			expect(res.body.length).to.be.above(0);
// 			expect(res.body).to.have.all.keys("partyDate", "partyTime", "menu", "subQuestionType", "subQuestions");
// 		})
// 	})

// 	it(`should add update Party time on PUT `, (done) => {
// 		let party = new Party({ 
// 			partyDate: "2017-10-10",
// 		 partyTime: "8:00 PM",
// 		 menu: ["one", "two"], 
// 		 subQuestionType: "Dinner", 
// 		 subQuestions: ["three", "four"] 
// 	 })
// 		party.save()
// 		.then((party) => {
// 			client
// 			.put(`/api/party/${party._id}`)
// 			.send({
// 				partyTime: "11:00 AM",
// 			})
// 			.end((err, res)=> {
// 				console.log("====> ", res.body)
// 				expect(res).to.have.status(204)
// 				expect(res.body).to.be.a('Object')
// 				// expect(res.body.party).to.have.property('partyTime').to.equal("11:00 AM");
// 				done()

// 			})
// 		}).catch((error)=> {
// 			console.log(error);
// 		});
// 	})

// 	it(`should delete a party given an id `, (done) => {
// 		let party = new Party({ 
// 			 partyDate: "2017-10-10",
// 			partyTime: "8:00 PM",
// 			menu: ["one", "two"], 
// 			subQuestionType: "Dinner", 
// 			subQuestions: ["three", "four"] 
// 		})
// 		party.save()
// 		.then((party) => {
// 			client
// 		.delete(`/api/party/${party._id}`)
// 		.end((err, res) => {
// 			expect(res).to.have.status(204);
// 			done();
// 		});
// 		});
// 	});
// });