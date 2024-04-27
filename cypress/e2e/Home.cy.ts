/// <reference types="cypress" />

describe("Test home page", () => {
    it("on home page user can see slogan", () => {
        cy.visit("/");
      });
  });

 