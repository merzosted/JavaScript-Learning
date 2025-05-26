const PersonProto = {
    calcAge(){
        return 2025 - this.birthYear;
    },
    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
}

const StudentProto = Object.create(PersonProto);

StudentProto.init= function(firstName, birthYear, course){
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}

const Rizz = Object.create(StudentProto);
Rizz.init('Rizwan', 2001, 'Mechanical Engineering');
console.log(Rizz.calcAge());