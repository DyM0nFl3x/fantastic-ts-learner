const addStudentGeneric = <T>(stuInfo: T) => {
  return { courseName: "next_level", ...stuInfo };
};

const AddTwoNum = <N1 extends number, N2 extends number>(n1: N1, n2: N2) => {
  return n1 + n2;
};

const stu1 = {
  name: "rakib",
  taka: "nai",
};
const stu2 = {
  name: "sd",
};
const res = addStudentGeneric(stu2);
console.log(AddTwoNum(12, 12), res);
