describe("manejador de tweets", () => {
  it("si registro el texto -Hola mundo- deberia poder ver la publicacion en la lista de publicaciones", () => {
    cy.visit("/");
    cy.get("#texto-tweet").type("Hola Mundo");
    //cy.get("#segundo-numero").type(5);
    cy.get("#tweet-button").click();
    cy.get("#resultado-div").should("contain", "Hola Mundo");
  });
});
