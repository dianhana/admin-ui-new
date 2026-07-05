describe("User login", () => {
  it("should allow user to log in with valid credentials", () => {
    cy.viewport(550, 750);

    cy.visit("http://localhost:5174/");
    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "●●●●●●●●●●●●●●")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();

    cy.url().should("eq", "http://localhost:5174/");

    cy.get("aside").should("exist");
    cy.get("main").should("exist");
  });

  it("should not allow user to log in with invalid credentials", () => {
    cy.visit("http://localhost:5174/");
    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .type("hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .type("123");

    cy.get("button").contains("Login").click();

    cy.get("div").contains("Wrong Password");
  });
});