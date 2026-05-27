type Area<T> = {
  [key in keyof T]: T[key];
}


const test: Area<{ height: string; weight: boolean }> = {
  height: "100",
  weight: true
};
