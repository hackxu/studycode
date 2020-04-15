// function addFiveToABunchOfNumbers(...numbers) {
//   return numbers.map(x => x + 5)
// }

// const result = addFiveToABunchOfNumbers(4, 5, 6, 7, 8, 9, 10)

// const [a, b, ...rest] = [1, 2, 3, 4]
// const { e, f, ...others } = {
//   e: 1,
//   f: 2,
//   g: 3,
//   h: 4
// }
class Fk {
  constructor(name) {
    this.name = name
  }
}
class Person {
  constructor(name) {
    this.name = name;
  }
}

class Student extends Person {
  constructor(name, studentId) {
    super(name)
    this.studentId = studentId
  }
}
const ss = new Student()
console.log(ss());

// console.log(e);
// console.log(f);w
// console.log(...others);
