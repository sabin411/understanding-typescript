/**
 * Enum: Enumerated global constant identifiers
 */
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
/**
 * Tuples: Fixed length and fixed type array
 */
var person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    // Tuple
    role: [2, Role.READ_ONLY],
};
if (person.role[0] === Role.ADMIN) {
    console.log("is admin");
}
else {
    console.log("is not admin");
}
/**
 * Any type: Any type of value is most flexible type
 */
