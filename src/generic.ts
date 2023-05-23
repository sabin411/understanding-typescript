function merge<T extends Object, U extends Object>(obj1: T, obj2: U) {
  return Object.assign(obj1, obj2);
}

const result2 = merge(12, { age: 30 });

function extractAndConvert<T extends Object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

const res = extractAndConvert(
  { name: "Max", age: 1, address: "Banepa" },
  "address"
);
console.log(res);

/**
 * Generic Utility/Helper Types
 */
// Examples are: Partial, Readonly, Record, Pick, Omit, Exclude, Extract
