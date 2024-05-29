const request = require('supertest');
const { MongoClient } = require('mongodb');

const createApp = require('../src/app');
const { config } = require('../src/config');

const { generateManyBooks } = require('../src/fakes/book.fake');

describe('books', () => {
  let app = createApp();
  let server;
  let database;
  const DB_NAME = config.dbName;
  const MONGO_URI = config.dbUrl;
  console.log("🚀 ~ file: book.e2e.js ~ line 10 ~ MONGO_URI", MONGO_URI)
  console.log("🚀 ~ file: book.e2e.js ~ line 10 ~ DB_NAME", DB_NAME)
  beforeAll(async () => {
    app = createApp();
    server = app.listen(3000);
    const client = new MongoClient(MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    await client.connect();
    database = client.db(DB_NAME);
  })

  afterAll(async () => {
    await server.close();
    await database.dropDatabase();
  })

  describe('GET /api/v1/books', () => {
    test('should return a list books', async () => {
      // arrange
      const fakeBooks = generateManyBooks(2);
      const collection = database.collection('books');
      const booksInsert = await collection.insertMany(fakeBooks);

      // act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          //assert
          expect(body.length).toEqual(booksInsert.insertedCount);
        });
    });

  })
});
