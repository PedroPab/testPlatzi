const mockSypGetAll = jest.fn(); // Tocó subirla para que la llame bien en el test.
const request = require('supertest');

const createApp = require('../src/app');

const { generateManyBooks } = require('../src/fakes/book.fake');

// const mockSypGetAll = jest.fn()

jest.mock('../src/lib/mongo.lib', () => {
  return jest.fn().mockImplementation(() => ({
    getAll: mockSypGetAll,
    create: () => { },
  }))
})

describe('books', () => {
  let app = createApp();
  let server;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3000);
  })

  afterAll(async () => {
    await server.close();
    jest.clearAllMocks();
  })

  describe('GET /api/v1/books', () => {
    test('should return a list books', async () => {
      // arrange
      const fakeBooks = generateManyBooks(2);
      console.log("🚀 ~ test ~ fakeBooks:", fakeBooks)
      mockSypGetAll.mockResolvedValue(fakeBooks);
      // act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          //assert
          expect(body.length).toEqual(fakeBooks.length);
        });
    });

  })
});
