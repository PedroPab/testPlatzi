//matches
test("object equality", () => {
  const obj = { name: "John" }
  expect(obj).toEqual({ name: "John" })
})

test("object null", () => {
  const data = null
  expect(data).toBeNull()
  expect(data).not.toBeUndefined()
})


test("booleans", () => {
  expect(true).toEqual(true)
  expect(0).toBeFalsy()
  expect(1).toBeTruthy()
  expect('').toBeFalsy()
})


test("strings", () => {
  expect('Cristian').toMatch(/Cris/)
  expect('Cristian').not.toMatch(/John/)
})


test("arrays", () => {
  const list = [1, 2, 3]
  expect(list).toContain(2)
  expect(list).toHaveLength(3)
})