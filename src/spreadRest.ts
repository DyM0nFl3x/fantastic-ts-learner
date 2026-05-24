//spread
const spread: string[] = ["rakib", "islam", "hi"];
const spread2: string[] = ["raki", "isla", "h"];
const total: string[] = [...spread, ...spread2];

console.log(total);

const rest: object = {
  name: "rak",
  age: 18,
};
const rest2: Record<string, string> = {
  hobby: "song",
};

console.log({ ...rest, ...rest2 });

const rest3 = (...name: string[]) => {
  name.forEach((element: string) => {
    console.log(element);
  });
};
rest3('rakibb','asdf','asdfsdf')
