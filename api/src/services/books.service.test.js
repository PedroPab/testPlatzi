const BooksService = require('./books.service');

const fakeBooks = [
  {
    _id: '60f1b3b3b3b3b3b3b3b3b3',
    name: 'Book 1',
  },
]
const mockSypGetAll = jest.fn()

const MongoLibSub = {
  getAll: mockSypGetAll,
  create: () => { },
}


jest.mock('../lib/mongo.lib', () => {
  return jest.fn().mockImplementation(() => ({
    getAll: mockSypGetAll,
    create: () => { },
  }))
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
      mockSypGetAll.mockResolvedValue(fakeBooks);
      const query = {};
      // act
      const books = await service.getBooks(query);
      // assert
      expect(books.length).toEqual(1);
    })

    it('debe contener el id ', async () => {
      // arrange
      mockSypGetAll.mockResolvedValue(fakeBooks);
      const query = {};
      // act
      const books = await service.getBooks(query);
      // assert
      expect(books[0].name).toEqual('Book 1');
      expect(mockSypGetAll).toHaveBeenCalled()
      expect(mockSypGetAll).toHaveBeenCalledTimes(1)
      expect(mockSypGetAll).toHaveBeenCalledWith(service.collection, query)
    })

  })
})