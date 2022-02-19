

/// <reference types="cypress" />
describe ('Test1',()=>{
    it('Broken link for Buggy Rating when navigation to other pages',()=>{
               
       cy.visit('https://buggy.justtestit.org/');
       cy.contains('Lamborghini')
       cy.get('[src="/img/cars/Lamborghini-Logo.png"]').trigger('mouseover').click();       
       cy.contains('Buggy Rating').trigger('mouseover').click();
       cy.contains('Popular Make')
  
    }
    
    )
})