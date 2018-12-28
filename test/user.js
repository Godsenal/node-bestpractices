const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../');

chai.should();
chai.use(chaiHttp);

describe('/GET user', () => {
  it('it should handle error', done => {
    chai
      .request(app)
      .get('/api/user?fakeError=1')
      .end((err, res) => {
        res.should.have.status(403);
        done();
      });
  });
});

describe('/POST user', () => {
  it('it should handle error', done => {
    chai
      .request(app)
      .post('/api/user')
      .send({ user: { id: 1, name: '!!' } }) // name should be [a-z][A-Z]
      .end((err, res) => {
        res.should.have.status(403);
        done();
      });
  });
});
