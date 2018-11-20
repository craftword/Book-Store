process.env.NODE_ENV = 'test'
import { expect } from 'chai';
import supertest from 'supertest';
import app from '../app';
//import truncate from 'truncate';
import userFactory from 'factories/user';
const request = supertest.agent(app);

describe('Book-Store', () => {
    let user;
    beforeEach(async () => {
        await truncate();
        user = await userFactory();
    });
    describe('Test Server Connection', () => {
      it('should respond with welcome message and status code 200', (done) => {
        request
          .get('/api/v1')
          .set('Connection', 'keep alive')
          .set('Content-Type', 'application/json')
          .end((err, res) => {
            expect('Content-Type', /json/);
            expect(res.body.message).to.equal('Welcome to the Book-Store App!');
            expect(res.statusCode).to.equal(200);
            done();
          });
      });
   
    it('should respond with message and status code 200 when access a non api', (done) => {
      request
        .get('/')
        .set('Connection', 'keep alive')
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          expect('Content-Type', /json/);
          expect(res.body.message).to.equal('Welcome to the beginning of nothingness.');
          expect(res.statusCode).to.equal(200);
          done();
        });
    });
  });
  });
  