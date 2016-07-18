var should = require('should');
var request = require('supertest');
var app = require('../app.js');

describe('CONNECT TO INSTAGRAM',function(done){
  it('should get data in json format from instagram api', function(){

    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});
