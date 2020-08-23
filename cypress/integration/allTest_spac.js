describe("Go Sign-In Page from Home Page Test", function () {
  it("Visit to products page", function () {
    cy.visit("http://localhost:3000/"); // go localhost
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

describe("Go Sign-In Page from Home Page Test", function () {
  it("Visit to products page", function () {
    cy.visit("http://localhost:3000/"); // go localhost
    cy.contains("Sign In").click(); //search this name, if test can find -> click on
    cy.url().should("include", "/signin"); // check
  });
  it("Sign In", function () {
    cy.get(".input-email").type("elif@example.com");

    cy.get(".input-password").type("1234");

    cy.get('[class = "button primary"]').click();

    cy.url().should("include", "/"); // check
  });
  it("See all products (admin page)", function () {
    cy.visit("http://localhost:3000/products");
  });
});

describe("Go Sign-In Page from Home Page Test", function () {
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
