 type User = {
  id: String;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  mobNo: string;
};

module.exports = { User };