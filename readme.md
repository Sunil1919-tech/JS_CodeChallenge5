Create a JavaScript class named "Animal" with the following properties and methods:

Properties:

name (a string)

age (a number)

species (a string)

Methods:

speak(): A method that logs a message to the console saying "The [species] named [name] says hello!" (where [species] and [name] are replaced with the actual values of the object's properties).

Then, create a subclass of "Animal" named "Dog" with an additional property:

Property:

breed (a string)

Override the "speak()" method in the "Dog" class to log a message to the console saying "The [breed] dog named [name] says woof!" (where [breed] and [name] are replaced with the actual values of the object's properties).

Finally, create an instance of the "Animal" class and an instance of the "Dog" class, and call their "speak()" methods to verify that they work correctly.




Add Ons




Add a static method to the "Animal" class named "createRandomAnimal" that generates a random animal object with a random name, age, and species.

Add a getter method to the "Dog" class named "isPuppy" that returns true if the dog is less than one year old, and false otherwise.

Add a setter method to the "Animal" class named "setAge" that sets the age property of the object. The method should check if the new age is a valid number (greater than zero), and throw an error if it's not.

Create a subclass of "Dog" named "ServiceDog" with an additional property:

Property:

isTrained (a boolean)

Override the "speak()" method in the "ServiceDog" class to log a message to the console saying "The [breed] service dog named [name] says woof!" if the dog is trained, and "The [breed] dog named [name] says woof!" if it's not trained.

Create an array of animal objects, including instances of the "Animal", "Dog", and "ServiceDog" classes. Use array methods to filter the array to only include dogs, and then sort the resulting array by age in descending order.