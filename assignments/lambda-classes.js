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
}

class Student extends Person {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
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

}