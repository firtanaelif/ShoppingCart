describe("Go Sign-In Page from Home Page Test and Create Products", function () {
  it("Visit to products page", function () {
    cy.visit("http://localhost:3000/"); // go localhost
    cy.contains("Sign In").click(); //search this name, if test can find -> click on
    cy.url().should("include", "/signin"); // check
  });
  it("Sign In", function () {
    cy.get(".input-email").type("elif@example.com");

    cy.get(".input-password").type("1234");

    cy.get('[class = "button primary"]').click();

    cy.visit("http://localhost:3000/products"); // go localhost
  });
  it("Create Products (admin page)", function () {
    cy.contains("Create Product").click(); //search this name, if test can find -> click on
  });
  it("Add New Product Information (admin page)", function () {
    cy.get(".input-name").type("Siyah Elbise");

    cy.get(".input-price").type("60");

    cy.get(".input-image").type("/images/img1.jpg");

    cy.get(".input-brand").type("Bershka");

    cy.get(".input-stock").type("15");

    cy.get(".input-category").type("Elbise");

    cy.get(".input-description").type("15 gün içerisinde ücretsiz iade");

    cy.contains("Create a new product").click(); //search this name, if test can find -> click on

    cy.visit("http://localhost:3000/products");
  });
});
