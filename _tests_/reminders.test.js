const request = require('supertest');
const app = require('../../app'); // Adjust the path to your app

describe('Reminders API', () => {
  it('should add a new reminder', async () => {
    const res = await request(app)
      .post('/reminders/add')
      .send({
        task: 'task_id',
        reminderDate: '2025-04-05T10:00:00Z'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should list reminders', async () => {
    const res = await request(app).get('/reminders/list');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
