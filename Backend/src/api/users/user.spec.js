const request = require('supertest');
const { expect } = require('chai');

const app = require('../../app');

describe('User route apis', () => {
  it('Should respond with list of users', async () => {
    const response = await request(app)
      .get('/api/users')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.users.length).to.be.gt(0);
  });

  it('Should respond with a singel specific user', async () => {
    const username = 'Mohan_rvm@003';
    const userResponse = {
      username: 'Mohan_rvm@003',
      name: 'Mohan',
      email: 'Mohan@gmail.com',
    };

    const response = await request(app)
      .get(`/api/users/${username}`)
      .expect('Content-Type', /json/)
      .expect(200);

    console.log(response.body.user);
    expect(response.body.user).to.be.eql(userResponse);
  });
});
