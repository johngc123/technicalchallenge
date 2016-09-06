var request = require('supertest');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var calc = require('../routes/calc.js');

describe('calculator', function(){
  var app = express();
  app.use(bodyParser.json());

  app.post('/api/calculate', calc.calculate);
  
  it('respond with json', function(done) {
    request(app)
	  .post('/api/calculate')
	  .send({ 'number1': 1, 'number2': 4, 'operation': 'add' })
	  .expect('Content-Type', "application/json; charset=utf-8")
	  .expect(function(res) {
        res.body.result = 5;
        res.body.links = "/api/calculate";
      })
	  .expect(200)
	  .end(function(err, res) {
		if (err) throw err;
		done();
	  });
  });
  
  it('respond with error status', function(done) {
    request(app)
	  .post('/api/calculate')
	  .send({ 'number1': 1, 'number2': 0, 'operation': 'divide' })
	  .expect('Content-Type', "application/json; charset=utf-8")
	  .expect(400)
	  .end(function(err, res) {
		if (err) throw err;
		done();
	  });
  });
})
