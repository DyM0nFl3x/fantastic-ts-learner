const getPropertyFormObj = <Obj>(obj: Obj, key: keyof Obj) => {
  return obj[key];
};

const user = {
  id: "123",
  name: "rak",
  age: "1234",
  address: {
    city: "mm",
  },
};

const result1 = getPropertyFormObj(user, "age");
const result2 = getPropertyFormObj(user, "address");
console.log(result1, "\n","result 2 is ", result2);
