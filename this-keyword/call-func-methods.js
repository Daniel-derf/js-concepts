let obj = {
  test: function (stringArg, stringArg2) {
    console.log(stringArg, this.name, stringArg2);
  },
  test2: () => {
    console.log(this);
  },
};

obj.test.call({ name: "daniel" });

obj.test.call({ name: "tiago" }, "Olá,", "tudo bem?");

obj.test.apply({ name: "daniel" }, ["Olá,", "tudo bem?"]);

const newCtxFunc = obj.test.bind({ name: "julia" });

newCtxFunc("Olá,", "tudo bem?");
