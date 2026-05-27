type StDetails = {
  id: string;
  name: string;
  email: string;
};

const trafficRule = <S extends StDetails>(student: S) => {
  return {
    enroll: true,
    ...student,
  };
};

const st1 = {
  id: "saf",
  name: "e",
  email: "saf",
};
const w = trafficRule(st1);
