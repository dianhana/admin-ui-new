describe("Dashboard (Overview) page", () => {
  const email = "111202315203@mhs.dinus.ac.id"; 
  const password = "123456"; 

  beforeEach(() => {
    cy.viewport(1280, 800);
    cy.visit("http://localhost:5173/");
    cy.url().should("include", "/login");
  });

  it("should let the user log in and land on the dashboard (overview) page", () => {
    cy.get("input#email")
      .should("be.visible")
      .type(email)
      .should("have.value", email);

    cy.get("input#password")
      .should("be.visible")
      .type(password)
      .should("have.value", password);

    cy.get("button").contains("Login").click();

    cy.url().should("eq", "http://localhost:5173/");

    cy.get("aside").should("exist");
    cy.get("main").should("exist");
  });

  it("should display the main dashboard cards after logging in", () => {
    cy.get("input#email").type(email);
    cy.get("input#password").type(password);
    cy.get("button").contains("Login").click();

    cy.url().should("eq", "http://localhost:5173/");

    cy.contains("Total Balance").should("be.visible");
    cy.contains("Goals").should("be.visible");
    cy.contains("Upcoming Bill").should("be.visible");
    cy.contains("Statistics").should("be.visible");
    cy.contains("Expenses Breakdown").should("be.visible");
  });

  it("should navigate through the sidebar menu to the Expenses page", () => {
    cy.get("input#email").type(email);
    cy.get("input#password").type(password);
    cy.get("button").contains("Login").click();

    cy.url().should("eq", "http://localhost:5173/");

    cy.get("aside").contains("Expenses").click();
    cy.url().should("include", "/expense");
    cy.contains("Expenses Comparison").should("be.visible");
  });
});
