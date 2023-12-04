class User {
    constructor(firstName, lastName, age, location) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.location = location;
    }
  
    comparesAge(otherPerson) {
      if (this.age === otherPerson.age) {
        return `${this.firstName} ha la stessa età di ${otherPerson.firstName}`;
      } else if (this.age > otherPerson.age) {
        return `${this.firstName} è più vecchio di ${otherPerson.firstName}`;
      } else {
        return `${this.firstName} è più giovane di ${otherPerson.firstName}`;
      }
    }
  }
  
  const user1 = new User("Mario", "Rossi", 25, "Roma");
  const user2 = new User("Luca", "Bianchi", 25, "Milano");
  const user3 = new User("Roberto", "Verdi", 35, "Torino");
  
  const confrontoEta = user1.comparesAge(user3);
  console.log(confrontoEta);
  