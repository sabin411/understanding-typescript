/**
 * Enum: Enumerated global constant identifiers
 */
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

/**
 * Tuples: Fixed length and fixed type array
 */
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, Role]; // Tuple
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  // Tuple
  role: [2, Role.READ_ONLY],
};

if (person.role[0] === Role.ADMIN) {
  console.log("is admin");
} else {
  console.log("is not admin");
}

/**
 * Any type: Any type of value is most flexible type
 */
