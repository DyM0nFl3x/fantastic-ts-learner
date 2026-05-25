// import type { User } from "./extype.ts";

type User = {
  id: String;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  mobNo: string;
};

const user: User = {
  id: "s",
  name: {
    firstName: "rakib",
    lastName: "islam",
  },
  mobNo: "7896354678",
};

const user2: User = {
  id: "ss",
  name: {
    firstName: "rakib",
    lastName: "islam",
  },
  mobNo: "7896354678",
};

console.log(user, user2);

type FunType = (num1: number, num2: number) => number;

const add: FunType = (num1, num2) => {
  return num1 + num2;
};
console.log(add(12,12));