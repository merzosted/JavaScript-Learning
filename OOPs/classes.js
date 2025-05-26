class Person {
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calcAge(){
        return 2025 - this.birthYear;
    }
}

const Jonas = new Person('Jonas', 1990);
console.log(Jonas.calcAge());  