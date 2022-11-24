import contar from "./sumador.js";

describe("manejador contador de palabras", () => {
  it("devolver 1 si se ingresa una palabra", () => {
    expect(contar("palabra")).toEqual(1);
  });
});
