let chai = require('chai');
let server = require('../server');
let expect = chai.expect;
let should = chai.should();

chai.use(require('chai-http'));
chai.use(require('chai-uuid'));

describe('/GET books', () => {
    it('it should GET all the books', (done) => {
      chai.request(server)
          .get('/books')
          .end((error, response) => {
            response.should.have.status(200);
            response.body.should.be.a('array');
            done();
          });
    });
});

describe('/POST books', () => {
  it('it should return status of 201', (done) => {

    let book = { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954,pages:3000 };
    chai.request(server)
        .post('/books')
        .send(book)
        .end((error, response) => {
          response.should.have.status(201);
          done();
        });
  });

  it('it should have a uuid v4 for id', (done) => {

    let book = { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1954,pages:3000 };
    chai.request(server)
        .post('/books')
        .send(book)
        .end((error, response) => {
          expect(response.body.id).to.be.a.uuid('v4');
          done();
        });
  });


});