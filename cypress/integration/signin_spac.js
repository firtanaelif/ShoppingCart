describe("Go Sign-In Page from Home Page Test and Create Products", function () {
  it("Visit to products page", function () {
    cy.visit("http://localhost:3000/"); // go localhost homepage
    cy.contains("Sign In").click(); //search this name, if test can find -> click on
    cy.url().should("include", "/signin"); // check
  });
  it("Sign In", function () {
    cy.get(".input-email").type("elif@example.com");

    cy.get(".input-password").type("1234");

    cy.get('[class = "button primary"]').click();

    cy.url().should("include", "/"); // check
  });
});
