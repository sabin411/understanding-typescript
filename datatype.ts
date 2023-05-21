/**
 * 1. unknown type: Better than any type
 */
let userInput: unknown;
let userName: string;

userInput = 6;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
  console.log(userName);
}

/**
 * 2. never type: Function never returns anything
 */

function generateError(message: string, code: number): never {
  throw { message, code };
}

generateError("An error occurred!", 500);
