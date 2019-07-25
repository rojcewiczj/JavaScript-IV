// CODE here for your Lambda Classes
class Person {
    constructor(attr){
        this.name = attr.name;
        this.age =  attr.age;
        this.location = attr.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student} recieves a perfect score on ${subject}`);
    }
    grading(student) {
        console.log(student.grade + Math.floor((Math.random() * 100) - 80) )
    }
}

class Student extends Person {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
        this.grade = attr.grade;
    }
    listsSubjects() {
        console.log( `${this.favSubjects.join (' ')}`)
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
    graduate(student) {
        if(student.grade >= 70){
            console.log("you graduate!")
        }
        else {
            return Instructor.grading(student);
        }
    }

}

class ProjectManagers extends Instructor {
    constructor(attr){
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode(student,subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
    }

}
const John = new Instructor({
    name: 'John',
    location: 'New York',
    age: 45,
    favLanguage: 'Java',
    specialty: 'UX',
    catchPhrase: `whats up ma'dude?`
  });
  const Sarah = new Instructor({
    name: 'Sarah',
    location: 'Chicago',
    age: 35,
    favLanguage: 'C++',
    specialty: 'front-end',
    catchPhrase: `are you for real?`
  });
  const Jose = new Student({
    name: 'Jose',
    location: 'Texas',
    age: 25,
    previousBackground: "bird watching",
    className: "webDev",
    favSubjects: ["historical re-enactment", "pottery", "horse racing"],
    grade: Math.floor((Math.random() * 100) + 1),
  });
  const Emma = new Student({
    name: 'Emma',
    location: 'New Orleans',
    age: 28,
    previousBackground: "dog trainer",
    className: "UX",
    favSubjects: ["science", "math", "history"],
    grade: Math.floor((Math.random() * 100) + 1),
  });
  const Jim = new ProjectManagers({
    name: 'Jim',
    location: 'Ohio',
    age: 43,
    favLanguage: 'JavaScript',
    specialty: 'back-end',
    catchPhrase: `yeaaah...`,
    gradClassName: "WB22",
    favInstructor: "Sarah",
  });
  const Paul = new ProjectManagers({
    name: 'Paul',
    location: 'Virginia',
    age: 33,
    favLanguage: 'Python',
    specialty: 'back-end',
    catchPhrase: `you know it!`,
    gradClassName: "WB23",
    favInstructor: "John",
  });