import { faker } from '@faker-js/faker';

const generateBook = () => {
  return {
    id: faker.database.mongodbObjectId(),
    title: faker.commerce.product(),
    price: faker.commerce.price(),
  }
}

const generateManyBooks = (amount = 10) => {
  return Array.from({ length: amount }, () => generateBook())
}

export {
  generateBook,
  generateManyBooks
}