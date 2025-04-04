const request = require('supertest');
const app = require('../../app'); // Adjust the path to your app

describe('Emails API', () => {
  it('should send an email', async () => {
    const res = await request(app)
      .post('/emails/send')
      .send({
        to: 'recipient@example.com',
        subject: 'Test Email',
        text: 'This is a test email.'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Email sent successfully');
  });
});
