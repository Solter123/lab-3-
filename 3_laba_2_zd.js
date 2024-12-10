class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    info() {
      return `${this.name}, возраст: ${this.age}`;
    }
  }
  
  class Employee {
    constructor(name, age, position, salary) {
      this.person = new Person(name, age);
      this.position = position;
      this.salary = salary;
    }
  
    workInfo() {
      return `${this.person.info()}, Должность: ${this.position}, Зарплата: ${this.salary}`;
    }
  }
  
  class Turner {
    constructor(name, age, salary, machineType) {
      this.employee = new Employee(name, age, 'Токарь', salary);
      this.machineType = machineType;
    }
  
    turnerInfo() {
      return `${this.employee.workInfo()}, Тип станка: ${this.machineType}`;
    }
  }
  
  class Programmer {
    constructor(name, age, salary, language) {
      this.employee = new Employee(name, age, 'Программист', salary);
      this.language = language;
    }
  
    programmerInfo() {
      return `${this.employee.workInfo()}, Язык программирования: ${this.language}`;
    }
  }
  
  class Learner {
    constructor(name, age, institution, course) {
      this.person = new Person(name, age);
      this.institution = institution;
      this.course = course;
    }
  
    studyInfo() {
      return `${this.person.info()}, Учебное заведение: ${this.institution}, Курс: ${this.course}`;
    }
  }
  
  class Student {
    constructor(name, age, institution, course) {
      this.learner = new Learner(name, age, institution, course);
    }
  
    studentInfo() {
      return this.learner.studyInfo();
    }
  }
  
  class PartTimeStudent {
    constructor(name, age, institution, course, workingPlace) {
      this.student = new Student(name, age, institution, course);
      this.workingPlace = workingPlace;
    }
  
    partTimeInfo() {
      return `${this.student.studentInfo()}, Место работы: ${this.workingPlace}`;
    }
  }
  
  let person = new Person('Алексей', 35);
  console.log(person.info());
  
  let employee = new Employee('Виктор', 40, 'Менеджер', 50000);
  console.log(employee.workInfo());
  
  let turner = new Turner('Иван', 50, 45000, 'Токарный станок 3А162');
  console.log(turner.turnerInfo());
  
  let programmer = new Programmer('Елена', 30, 90000, 'JavaScript');
  console.log(programmer.programmerInfo());
  
  let student = new Student('Ольга', 20, 'МГУ', 2);
  console.log(student.studentInfo());
  
  let partTimeStudent = new PartTimeStudent('Дмитрий', 23, 'СПбГУ', 3, 'ООО "Технологии"');
  console.log(partTimeStudent.partTimeInfo());
  