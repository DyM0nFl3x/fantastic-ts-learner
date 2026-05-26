const KGtoGmCon = (value: number | string) => {
  if (typeof value === "number") {
    return value * 1000;
  } else if (typeof value === "string") {
    const [v] = value.split(" ");
    console.log(v);

    return `${value} in gm is ${Number(v) * 1000}`;
  }
};

const result1 = KGtoGmCon(2) as number;
const result2 = KGtoGmCon("2 KG") as string;
console.log({ result1, result2 });
