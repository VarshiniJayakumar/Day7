class Person {
    constructor(firstName, lastName, age, email, address) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
      this.address = address;
    }
  
    getFullName() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  // Example usage:
  const person1 = new Person("John", "Doe", 30, "johndoe@example.com", "123 Main St, New York");
  console.log(person1.getFullName()); // Output: John Doe
  console.log(person1.age); // Output: 30
  console.log(person1.email); // Output: johndoe@example.com
  console.log(person1.address); // Output: 123 Main St, New York
  