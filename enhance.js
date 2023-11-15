/* 1 */
const createInstructor = (firstName, lastName) => ({ firstName, lastName });

/* 2 */
const favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!",
};

/* 3 */
const instructor = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return `${this.firstName} says bye!`;
  },
};

/* 4 */
function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]() {
      console.log(noise);
    },
  };
}