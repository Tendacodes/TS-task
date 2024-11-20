var Person = /** @class */ (function () {
    function Person(person) {
        this.name = person.name;
        this.surname = person.surname;
        this.email = person.email;
        this.password = person.password;
    }
    Person.prototype.getInfo = function () {
        return {
            name: this.name,
            surname: this.surname,
            email: this.email,
        };
    };
    Person.prototype.changeEmail = function (newEmail) {
        this.email = newEmail;
    };
    return Person;
}());
var person1 = new Person({
    name: "11111",
    surname: "111111",
    email: "1111111",
    password: "1111111",
});
console.log(person1.getInfo());
console.log(person1.changeEmail("111111"));
