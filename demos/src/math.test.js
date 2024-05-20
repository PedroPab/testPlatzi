import { sum, multiply, divide, subtract, isNumberValid, isMultiplesNumberValid } from './math'

test('Sumar es muy sencillo', () => {
  expect(sum(1, 2)).toBe(3)

  //sumar letras , debe de dar null
  const rta = sum('a', 2)
  expect(rta).toBeNull()

})

test('multiplies 3 * 4 to equal 12', () => {
  expect(multiply(3, 4)).toBe(12)
})

test('divides 10 / 2 to equal 5', () => {
  expect(divide(10, 2)).toBe(5)
})

test('subtracts 7 - 3 to equal 4', () => {
  expect(subtract(7, 3)).toBe(4)
})

test('validar que sea un numero', () => {
  expect(isNumberValid(1)).toBeTruthy()
  expect(isNumberValid('a')).toBeFalsy()
})

test('validar multiples números', () => {
  expect(isMultiplesNumberValid(1, 2, 3)).toBeTruthy()
  expect(isMultiplesNumberValid(1, 'a', 3)).toBeFalsy()
})

