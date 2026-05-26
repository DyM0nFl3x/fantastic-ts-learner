//object destructuring

const user1 = {
  id: 88,
  nam: {
    firstName: "rakibul",
    middleName: "islam",
    lastName: "rakib",
  },
};

const {
  nam: { firstName, middleName },
} = user1;
console.log(firstName, middleName);
//array destructuring

const user2: any[] = [
  "rakib",
  "ismael",
  "dev",
  "programming",
  ["mew", "total", 11, 14, 154],
];
const [, , , , [a]] = user2;
console.log(a);
