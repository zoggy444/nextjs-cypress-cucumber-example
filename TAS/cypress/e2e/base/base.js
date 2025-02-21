import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I am on the main menu', () => {
  cy.visit('http://localhost:3000');
});

When('I click the {string} button', () => {
  cy.get('button[type="button"]').click();
});

When('I launch the App', () => {
  cy.visit('http://localhost:3000');
});

Then('I see an {string} tag containing {string}', (tag, text) => {
  cy.get(tag).contains(text).should('be.visible');
});

Then('I land on the game page', () => {
  cy.url().should('eq', 'http://localhost:3000/game')
});

Then('I see a button with type {string} containing {string}', (type, text) => {
  cy.get(`button[type="${type}"]`).contains(text).should('be.visible');
});

Then('the board is set', () => {
  cy.get('#A1 #A2').should('be.visible');
});

Then('White player starts their turn', () => {
  return 'pending'
});
