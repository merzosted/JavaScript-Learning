const PersonProto = {
    calcAge(){
        return 2025- this.birthYear;
    },

    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 2002);
console.log(sarah.calcAge());