const request = require('supertest');
const app = require('../../app'); // Adjust the path to your app

describe('NLP API', () => {
  it('should process NLP query', async () => {
    const res = await request(app)
      .post('/nlp/query')
      .send({
        query: 'What is the weather like today?'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('response');
  });
});
