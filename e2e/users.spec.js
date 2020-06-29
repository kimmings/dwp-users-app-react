describe('The DWP TEST Page', () => {
  it('successfully loads', () => {
    cy.visit('/');
    cy.contains('DWP').should('have.length', 1);
    cy.contains('Users Near London').should('have.length', 1);
    cy.contains('London Users').should('have.length', 1);
  });

  it('loads and displays London Users', () => {
    cy.visit('/');
    cy.contains('Users Near London').click();
    cy.get('tr').then((rows) => {
      expect(rows).to.have.length.of.at.least(4);
    });

    cy.contains('London Users').click();
    cy.get('tr').then((rows) => {
      expect(rows).to.have.length.of.at.least(7);
    });
  });
});
