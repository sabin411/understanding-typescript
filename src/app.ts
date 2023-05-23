// intersection
type admin = {
  name: string;
  privileges: string[];
};

type employee = {
  name: string;
  startDate: Date;
};

type elevatedEmployee = admin & employee;

const e1: elevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

/* Function overloading */
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// function overload: different return type
// for function overload we need to define the function signature
// function name should be same here like add here and in the function below
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  // type guard
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Max", " Schwarz");
result.split(" ");
