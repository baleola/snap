Given("I visit the snapshot homepage", () => {
  cy.visit("http://localhost:3000/");
});

Then("The page title should be Snap Shot", () => {
  cy.title().should("eq", "Snap Shot");
});

And("The page title should be Snap Shot", () => {
  cy.title().should("eq", "Snap Shot");
});

And('I click the Mountain button', ()=>{
    cy.get(':nth-child(1) > a').click()
})

And('I click the Beaches button', ()=>{
    cy.get(':nth-child(2) > a').click()
})


And('I click the Birds button', ()=>{
    cy.get(':nth-child(3) > a').click()
})

And('I click the Food button', ()=>{
    cy.get(':nth-child(4) > a').click()
})

And("I search for {string}", (term) => {
  cy.get("input").type(term);
  cy.get(".search-button").click();
});

Then("The url should include {string}", (term) => {
    cy.url().should('eql', `http://localhost:3000/#/SnapScout/search/${term}`)
  });


Then("I should see up to 24 pictures under the results", () => {
  cy.get("div > ul").children().its('length').should("be.greaterThan", 0);
  cy.get("div > ul").children().its('length').should("be.lessThan", 25);
});

Then("I should see the error message when no results are found", () => {
  cy.get(".photo-container > :nth-child(1) > div > h2")
    .invoke("text")
    .then((text) => {
      expect(text).to.eql("No Images Found");
    });
  cy.get("p")
    .invoke("text")
    .then((text) => {
      expect(text).to.eql("Please try a different search term");
    });
});

Then("I should see {string} Pictures under results header", (term) => {
  cy.get(".container > :nth-child(2) > :nth-child(1)")
    .invoke("text")
    .then((text) => {
      expect(text).to.eql(`${term} Pictures`);
    });
});


