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
      oldUsername: 'logintest',
      username: 'logintest123',
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

  describe('Create Electric Device', () => {
    
    //Setup
    it('sets up test', async function(){
        const requestWithSupertest = await supertest(server);
        const res = await requestWithSupertest.post('/register').send({
        email: 'device@gmail.com',
        username: 'devicesetup',
        password: 'devicesetup'
      });
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('user')
    });

    //010 - iniot electric device
    it('010 - iniot electric device', async function(){
      const requestWithSupertest = await supertest(server);
      const res = await requestWithSupertest.post('/initElectricDeviceMockData').send({
        username: 'devicesetup'
    });
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('message')
    });

    //011 - get electric device
    it('011 - get electric device', async function(){
      const requestWithSupertest = await supertest(server);
      const res = await requestWithSupertest.post('/getElectricDevice').send({
        username: 'devicesetup',
        password: 'devicesetup'
    });
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('electricDevice')
    });

    //012 - change circuit name
    it('011 - get electric device', async function(){
      const requestWithSupertest = await supertest(server);
      const res = await requestWithSupertest.post('/changeCircuitName').send({
        username: 'devicesetup',
        password: 'devicesetup',
        circuitID: 1,
        givenName: 'new name'
    });
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('circuit')
    });
  
  });

  describe('Get electric data', () => {

    var total = 0

    //013 - Get usage in last hour electric
    it('013 - Get usage in last hour electric', async function(){
      const requestWithSupertest = await supertest(server);
      const res = await requestWithSupertest.post('/getLastHourInMinutes').send({
        username: 'devicesetup',
        password: 'logintest',
        circuit: 'All'
    });
    expect(res.status).toEqual(200);
    console.log('-====================================================')
    console.log(res.body)
    console.log('-====================================================')
    console.log(res.body.mockElectricMinutes)
    console.log('-====================================================')
    let responseArray = await Array.from(res.body.mockElectricMinutes)
    responseArray.forEach(element => total += element[1])
    expect(total).toBeGreaterThan(0)
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body).toHaveProperty('mockElectricMinutes')
    });

    //014 - Retrieve last minute total of electric data in seconds
    it('014 - Retrieve last minute total of electric data in seconds', async function(){
      const requestWithSupertest = await supertest(server);
      const res = await requestWithSupertest.post('/getLastMinuteInSeconds').send({
        username: 'devicesetup',
        password: 'logintest',
        circuit: 'All'
    });
    expect(res.status).toEqual(200);
    var localTotal = 0
    let responseArray = await Array.from(res.body.mockElectricSeconds)
    responseArray.forEach(element => localTotal += element[1])
    expect(localTotal).toBeGreaterThan(0)
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body).toHaveProperty('mockElectricSeconds')
    });

    //015 - Retrieve last hour total of electric data in minutes for one circuit
    it('015 - Retrieve last hour total of electric data in minutes for one circuit', async function(){
      const requestWithSupertest = await supertest(server);
      const res = await requestWithSupertest.post('/getLastHourInMinutes').send({
        username: 'devicesetup',
        password: 'logintest',
        circuit: '1'
    });
    expect(res.status).toEqual(200);
    var localTotal = 0
    let responseArray = await Array.from(res.body.mockElectricMinutes)
    responseArray.forEach(element => localTotal += element[1])
    expect(localTotal).toBeLessThan(total) //So we know that it is not pulling all data which is total
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body).toHaveProperty('mockElectricMinutes')
    });
  
  });