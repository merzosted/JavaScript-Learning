class Person {
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calcAge(){
        return 2025 - this.birthYear;
    }
}

class Student extends Person {
    constructor(firstName, birthYear, course){
        super(firstName, birthYear);
        this.course = course;
    }
}