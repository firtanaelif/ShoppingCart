describe("Go Register Page for create account from Home Page Test", function () {
  it("Visit to home page", function () {
    cy.visit("http://localhost:3000/"); // go localhost
    cy.contains("Sign In").click(); //search this name, if test can find -> click on
    cy.url().should("include", "/signin"); // check
  });
  it("Sign In", function () {
    cy.contains("Create your account").click(); // search "Add to Cart" button
    cy.url().should("include", "/register"); // check
  });
  it("Register Page", function () {
    cy.get(".input-name").type("Ali Veli");

    cy.get(".input-email").type("ali@veli.com");

    cy.get(".input-password").type("1234");

    cy.get(".input-rePassword").type("1234");

    cy.get('[class = "button primary"]').click();
  });
});
