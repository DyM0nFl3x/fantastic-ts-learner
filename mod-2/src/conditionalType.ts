type richMan = {
  tractor: "string";
  car: "string";
  bike: "string";
};

type check<T> = T extends keyof richMan ? "true" : "false";
type has=check<"nai">