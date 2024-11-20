interface PersonProperties {
    name: string,
    surname:string,
    email: string,
    password: string
}

class Person{

    public name: string;
    public surname: string;
    protected email: string;
    private password: string;

    constructor(person: PersonProperties) {
        this.name = person.name;
        this.surname = person.surname;
        this.email = person.email;
        this.password = person.password;
      }
    
      public getInfo() {
        return {
          name: this.name,
          surname: this.surname,
          email: this.email,
        };
      }

   public changeEmail(newEmail: string): void {
        this.email = newEmail;
      }

}

const person1 = new Person({
    name: "11111",
    surname: "111111",
    email: "1111111",
    password: "1111111",})

console.log(person1.getInfo());

console.log(person1.changeEmail("111111"));
    