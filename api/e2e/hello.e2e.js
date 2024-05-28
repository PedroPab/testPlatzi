const request = require('supertest');

const createApp = require('../src/app');

describe('test for hello endpoint', () => {
  let app = createApp();
  let server;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3000);
  })

  afterAll(async () => {
    await server.close();
  })

  describe('GET /', () => {
    test('should return a message', async () => {
      return request(app).get('/')
        .expect(200)
        .then((response) => {
          expect(response.text).toBe('Hello World!');
        });
    });

  })
});
