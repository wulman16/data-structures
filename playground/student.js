class Student {
  constructor(firstName, lastName, grade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}.`;
  }

  finishYear() {
    if (this.grade === 12) {
      return `Congratulations! You've graduated!`;
    } else {
      this.grade += 1;
      return `Your grade in school is now ${this.grade}!`;
    }
  }

  static enrollStudents() {
    return `Enrolling students!`;
  }
}

let firstStudent = new Student(`Colt`, `Steele`, 10);
let secondStudent = new Student(`Will`, `Ulman`, 9);

console.log(firstStudent.grade - secondStudent.grade);
console.log(firstStudent.fullName());
console.log(firstStudent.finishYear());
console.log(firstStudent.finishYear());
console.log(firstStudent.finishYear());
