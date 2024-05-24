const BooksService = require('./books.service');

const fakeBooks = [
  {
    _id: '60f1b3b3b3b3b3b3b3b3b3',
    name: 'Book 1',
  },
]
const sypGetAll = jest.fn()

const MongoLibSub = {
  getAll: sypGetAll,
  create: () => { },
}


jest.mock('../lib/mongo.lib', () => {
  return jest.fn().mockImplementation(() => MongoLibSub)
})

describe('test for BooksService', () => {
  let service = new BooksService();

  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('test for getBooks method', () => {
    it('should return an array of books', async () => {
      // arrange

      // act
      const books = await service.getBooks({});
      // assert
      expect(books.length).toEqual(1);
    })

    it('debe contener el id ', async () => {
      // arrange
      sypGetAll.mockResolvedValue(fakeBooks);
      const query = {};
      // act
      const books = await service.getBooks(query);
      // assert
      expect(books[0]._id).toEqual('60f1b3b3b3b3b3b3b3b3b3');
      expect(sypGetAll).toHaveBeenCalled()
      expect(sypGetAll).toHaveBeenCalledWith('book', query)
    })

  })
})