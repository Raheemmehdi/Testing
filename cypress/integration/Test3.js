

/// <reference types="cypress" />

import { waitForDebugger } from "inspector";

describe ('Test3',()=>{
    it('This test will verify that Author column is getting some data else will fail the case',()=>{
              
       cy.visit('https://buggy.justtestit.org/');
       cy.contains('Popular Model')
       cy.get('[src="/img/cars/Diablo.jpg"]').trigger('mouseover').click();
       cy.wait(600);
       cy.get('tbody > :nth-child(1) > :nth-child(2)').invoke('val').should('not.be.empty')
       //cy.get('tbody > :nth-child(1) > :nth-child(2)').length=0   'This will verify that case will pass when Author column doesn't have any value
       



    }
    
    )
})