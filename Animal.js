// parent class named as Animal
class Animal {
  constructor(name, age, species) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  speak() {
    console.log(`The ${this.species} named ${this.name} says hello!!`);
  }

  set setAge(newAge) {
    if (typeof newAge !== "number" || newAge <= 0) {
      throw new Error("Age must be a valid number greater than zero.");
    }
    this.age = newAge;
  }

  //   static method
  static createRandomAnimal() {
    const randomName = getRandomName;
    const randomAge = getRandomAge;
    const randomSpecies = getRandomSpecies;
    return new Animal(randomName, randomAge, randomSpecies);
  }
}

// child class named Dog which inherits the properties of the parent
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  speak() {
    console.log(`The ${this.breed} dog named ${this.name} says woof!`);
  }

  get isPuppy() {
    return this.age < 1;
  }
}

// // instance of the Dog class
// const dog = new Dog("chinn", 12, "German sheperd");
// dog.speak();

class ServiceDog extends Dog {
  constructor(name, age, breed, isTrained) {
    super(name, age, breed);
    this.isTrained = isTrained;
  }

  speak() {
    if (this.isTrained) {
      console.log(
        `The ${this.breed} service dog named ${this.name} says woof!`
      );
    } else {
      super.speak(); // Call the speak method of the parent class (Dog)
    }
  }
}

// Helper functions to generate random values
function getRandomName() {
  const names = ["Buddy", "Max", "Daisy", "Luna", "Charlie", "Lucy"];
  return names[Math.floor(Math.random() * names.length)];
}

function getRandomAge() {
  return Math.floor(Math.random() * 10) + 1; // Random age between 1 and 10
}

function getRandomSpecies() {
  const species = ["dog", "cat", "lion", "tiger", "elephant"];
  return species[Math.floor(Math.random() * species.length)];
}

// Define an array to hold randomly generated animal objects
const randomAnimals = [];

// Generate and store multiple random animal objects
for (let i = 0; i < 5; i++) {
  // Generating 5 random animals, you can adjust the number as needed
  const randomAnimal = Animal.createRandomAnimal();
  randomAnimals.push(randomAnimal);
}

// Log the properties of each animal object
randomAnimals.forEach((animal) => {
  console.log(
    `Name: ${getRandomName()}, Age: ${getRandomAge()}, Species: ${getRandomSpecies()}`
  );
});

const myServiceDog = new ServiceDog("Buddy", 3, "Golden Retriever", true);
myServiceDog.speak();
