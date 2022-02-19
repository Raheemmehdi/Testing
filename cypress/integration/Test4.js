

/// <reference types="cypress" />

import { waitForDebugger } from "inspector";


describe ('Test4',()=>{
    it('Exception when accessing a page which throws an error',()=>{
        
       
        cy.visit('https://buggy.justtestit.org/');
        cy.contains('Overall Rating')
        cy.get('[src="/img/overall.jpg"]').trigger('mouseover').click();
        cy.get('.pull-xs-right > .form-control').clear()       
        cy.get('.pull-xs-right > .form-control').type('4{enter}')
        cy.get('[src="/img/cars/lancia-stratos.jpg"').trigger('mouseover').click();
// When accessing the page application throws an error and because of that back button links and other links doesn't work.
        try {
          nonExistentFunction();
        } catch (error) {
          console.error(error);
          
        }
        cy.get('.img-fluid').invoke('val').should('not.be.empty')
       
    }
    
    )
})