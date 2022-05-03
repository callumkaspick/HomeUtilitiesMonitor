const server = require('../../app.js');
const supertest = require('supertest');


describe('User Register', () => {

    //001- Email format
    it('Fails if email is wrong form', async function(){
        const requestWithSupertest = await supertest(server);
        const res = await requestWithSupertest.post('/register').send({
        email: 'emailemail.com',
        username: 'username',
        password: 'password123'
      });
        expect(res.status).toEqual(400);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('error')
    });

    //002- Email format
    it('Fails if password is wrong form', async function(){
        const requestWithSupertest = await supertest(server);
        const res = await requestWithSupertest.post('/register').send({
        email: 'email@email.com',
        username: 'username',
        password: '1'
      });
        expect(res.status).toEqual(400);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('error')
    });

    //003- Succcess Register
    it('Successfully registers user', async function(){
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

  describe('User Login', () => {
    
    //Setip
    it('sets up test', async function(){
        const requestWithSupertest = await supertest(server);
        const res = await requestWithSupertest.post('/register').send({
        email: 'login@email.com',
        username: 'logintest',
        password: 'logintest'
      });
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('user')
    });

    //004- No user
    it('004 No User', async function(){
        const requestWithSupertest = await supertest(server);
        const res = await requestWithSupertest.post('/login').send({
        username: 'nosuchuser',
        password: 'nosuchpassword'
      });
        expect(res.status).toEqual(403);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('error')
    });
    
    //005- wrong password format
    it('005- wrong password format', async function(){
        const requestWithSupertest = await supertest(server);
        const res = await requestWithSupertest.post('/login').send({
        username: 'username',
        password: '0'
      });
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('user')
    });

    //006- Succcess Login
    it('006 - Successfully login user', async function(){
        const requestWithSupertest = await supertest(server);
        const res = await requestWithSupertest.post('/login').send({
        username: 'logintest',
        password: 'logintest'
      });
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('user')
    });
  
  });

  describe('Edit Profile', () => {
    
    //Setip
    it('sets up test', async function(){
        const requestWithSupertest = await supertest(server);
        const res = await requestWithSupertest.post('/register').send({
        email: 'login@email.com',
        username: 'logintest',
        password: 'logintest'
      });
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('user')
    });

    //007 - edit password
    it('007 - edit password', async function(){
      const requestWithSupertest = await supertest(server);
      const res = await requestWithSupertest.post('/newPassword').send({
      username: 'logintest',
      oldPassword: 'logintest',
      password: 'logintest123'
    });
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('user')
    });

    //008 - edit username
    it('008 - edit username', async function(){
      const requestWithSupertest = await supertest(server);
      const res = await requestWithSupertest.post('/newUsername').send({
      oldUsername: 'logintest123',
      username: 'logintest',
      password: 'logintest123'
    });
      expect(res.status).toEqual(403);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('error')
    });

    //009 - edit email
    it('009 - edit email', async function(){
      const requestWithSupertest = await supertest(server);
      const res = await requestWithSupertest.post('/newEmail').send({
      newEmail: 'email@email.com',
      username: 'logintest',
      password: 'logintest123'
    });
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('user')
    });

  
  });

  describe('Create Device', () => {
    
    //Setip
    it('sets up test', async function(){
        const requestWithSupertest = await supertest(server);
        const res = await requestWithSupertest.post('/register').send({
        email: 'login@email.com',
        username: 'logintest',
        password: 'logintest'
      });
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('user')
    });

    //007 - edit password
    it('007 - edit password', async function(){
      const requestWithSupertest = await supertest(server);
      const res = await requestWithSupertest.post('/newPassword').send({
      username: 'logintest',
      oldPassword: 'logintest',
      password: 'logintest123'
    });
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('user')
    });

    //009 - edit email
    it('009 - edit email', async function(){
      const requestWithSupertest = await supertest(server);
      const res = await requestWithSupertest.post('/newEmail').send({
      newEmail: 'email@email.com',
      username: 'logintest',
      password: 'logintest123'
    });
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('user')
    });

  
  });
