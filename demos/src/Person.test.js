import Person from "./Person";

describe("Probando a la clase Person", () => {
  let person = new Person('Juan', 30, 1.70);
  beforeEach(() => {
    //Arrange / Given
    person = new Person('Juan', 30, 1.70);
  })

  test("should return down", () => {
    //AAA
    //Arrange / Given
    person.weight = 45
    //Act / When
    const imc = person.calcIMC();
    //Assert / Then
    expect(imc).toBe('down')
  })

  test("should return normal", () => {
    person.weight = 59
    const imc = person.calcIMC();
    expect(imc).toBe('normal')
  })
})