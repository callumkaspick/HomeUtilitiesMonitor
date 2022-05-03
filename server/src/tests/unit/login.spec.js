const server = require('../../app.js');
const supertest = require('supertest');


describe('User Endpoints', () => {

    it('Register /user should show all users', async function(){
        const requestWithSupertest = await supertest(server);
        const res = await requestWithSupertest.post('/register').send({
        email: 'email@email.com',
        username: 'username',
        password: 'password123'
      });
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('user')
    });
  
  });