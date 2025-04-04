const request = require('supertest');
const app = require('../../app'); // Adjust the path to your app

describe('Google Calendar API', () => {
  it('should generate auth URL', async () => {
    const res = await request(app).get('/google-calendar/auth-url');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('url');
  });

  it('should list events', async () => {
    const res = await request(app).get('/google-calendar/events');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
