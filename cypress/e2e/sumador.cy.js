describe("manejador de tweets", () => {
  it("si registro el texto -Hola mundo- deberia poder ver la publicacion en la lista de publicaciones", () => {
    cy.visit("/");
    cy.get("#texto-tweet").type("Hola Mundo");
    //cy.get("#segundo-numero").type(5);
    cy.get("#tweet-button").click();
    cy.get("#resultado-div").should("contain", "Hola Mundo");
  });

  it("si intento registrar un post sin haber ingresado ningun texto, deberia mostrarse un mensaje: no se puede ingresar un post sin texto ", () => {
    cy.visit("/");
    cy.get("#texto-tweet").type(" ");
    cy.get("#tweet-button").click();
    
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`No se puede ingresar un Post sin texto`)
    })
    //cy.get("#segundo-numero").type(5);
    
    
  });
});
