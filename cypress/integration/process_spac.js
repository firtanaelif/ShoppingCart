describe("Select product and add cart process Test", function () {
  it("Visit to products page", function () {
    cy.visit("http://localhost:3000/"); // go localhost
    cy.contains("Siyah Kuşaklı Gömlek Elbise").click(); //search this name, if test can find -> click on
    cy.url().should("include", "/product/5f3e8f70f64997350444149a"); // check
  });
  it("Details page", function () {
    cy.contains("Add To Cart").click(); // search "Add to Cart" button
    cy.url().should("include", "/cart/5f3e8f70f64997350444149a?qty=1"); // check
  });
  it("Proceed to Checkout", function () {
    cy.contains("Proceed to Checkout").click(); // search "Proceed to Checkout" button
  });
  it("Sign-In Page", function () {
    cy.get(".input-email").type("elif@example.com");

    cy.get(".input-password").type("1234");

    cy.get('[class = "button primary"]').click();
  });
});
