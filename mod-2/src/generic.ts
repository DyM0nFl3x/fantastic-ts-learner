type Generic<value> = Array<value>;

const friend: Generic<string> = ["asdf", "asdf"];

const userList: Generic<{ id: string; name: string; age: number }> = [
  {
    id: "1231w23",
    name: "c",
    age: 22,
  },
  {
    id: "123d123",
    name: "cxs",
    age: 22,
  },
  {
    id: "123s123",
    name: "xc",
    age: 22,
  },
];
