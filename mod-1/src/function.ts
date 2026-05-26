function add(num: [number, number]) {
  console.log(num[0] + num[1]);
}
add([1, 2]);

function add2(num1: number, num2: number) {
  console.log(num1 + num2);
}
add2(1, 2);

const add3 = (num1: number, num2: number): number => {
  return num1 + num2;
};

const obj: [rakib: string, numb?: string | number] = ['sdf', 23];
// const ob1j: { rakib: string; numb: number } = {
//   rakib: "sdf",
//   numb: 23
// };
const user: (number | any)[] = [1, 1, 1, 1, , 1, 1];
