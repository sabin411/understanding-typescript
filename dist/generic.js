"use strict";
function merge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
const result2 = merge(12, { age: 30 });
function extractAndConvert(obj, key) {
    return obj[key];
}
const res = extractAndConvert({ name: "Max", age: 1, address: "Banepa" }, "address");
console.log(res);
