type Area<T> = {
  [key in keyof T]: T[keyof T];
};

const hight: Area<{ height: string; weight: boolean }> = {
  height: "100",
  weight: true,
};
