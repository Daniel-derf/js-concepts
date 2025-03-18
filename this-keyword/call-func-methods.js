import assert from "node:assert";

let obj = {
  test: function (stringArg, stringArg2) {
    return stringArg + this.name + stringArg2;
  },
  test2: () => {
    return this;
  },
};

let result = obj.test.call({ name: "daniel" });
assert.strictEqual(result, "undefineddanielundefined");

result = obj.test.call({ name: "tiago" }, "Olá, ", ", tudo bem?");
assert.strictEqual(result, "Olá, tiago, tudo bem?");

result = obj.test.apply({ name: "daniel" }, ["Olá, ", ", tudo bem?"]);
assert.strictEqual(result, "Olá, daniel, tudo bem?");

let newCtxFunc = obj.test.bind({ name: "julia" });
result = newCtxFunc("Olá, ", ", tudo bem?");
assert.strictEqual(result, "Olá, julia, tudo bem?");

// o this no topo do arquivo de módulo ES é undefined, seria {} se fosse CommonJS, onde o topo é o objeto module.exports
result = obj.test2();
assert.strictEqual(result, undefined);
