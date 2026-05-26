//tuple

const couple: [string, string] = ["rakib", "bou"];
let studentID: [string, number] = ["rakibul", 23];

studentID[1] = 33;
// console.log(studentID);

const user: {readonly firstName: string; middleName?: string; lastName: string } = {
  firstName: "rakibul",
  lastName: "rakib",
  middleName: "islam",
};

// console.log(user);
