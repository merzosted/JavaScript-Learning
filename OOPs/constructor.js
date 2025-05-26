const Person = function(firstName, birthYear){
    // console.log(this);
    this.firstName = firstName;
    this.birthYear = birthYear;
}

const jonas = new Person('Jonas', 1991); 
console.log(jonas);
console.log(jonas instanceof Person);
console.log(Person.prototype);

Person.prototype.calcAge = function(){
    return 2025 - this.birthYear;
}

console.log(jonas.calcAge());
console.log(Person.prototype === jonas.__proto__);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'HomoSapiens';
console.log(jonas.species);
console.log(jonas.hasOwnProperty('species'));
