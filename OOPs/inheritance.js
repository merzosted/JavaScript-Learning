// In a regular function call the this keyword is set to undefinied
const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;

    this.calcAge = function(){
        return 2025 - this.birthYear;
    }
};

const Student = function(firstName, birthYear, course){
    Person.call(this, firstName, birthYear);
    this.course = course;

    this.introduce = function() {
        console.log(`I am ${this.firstName} and I study ${this.course}`);
    }
}

const Rizz = new Student('Rizwan', 2001, 'Mechanical');
Rizz.introduce();
console.log(Rizz.calcAge());
console.log(Rizz.__proto__.__proto__);
console.log(Rizz instanceof Student);

Student.prototype.constructor = Student;
console.log(Rizz.__proto__);
console.log(Rizz.__proto__.__proto__);
console.log(Rizz.__proto__.__proto__.__proto__);