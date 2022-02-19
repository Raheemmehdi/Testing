

/// <reference types="cypress" />

import { waitForDebugger } from "inspector";

describe ('Test1',()=>{
    it('PortalLoginTest',()=>{
        
       
       cy.visit('https://buggy.justtestit.org/');
       cy.contains('Overall Rating')
       cy.get('[src="/img/overall.jpg"]').trigger('mouseover').click();
       cy.contains('Engine').trigger('mouseover').click();
       cy.wait(1000)
       cy.get(':nth-child(1) > .thumbnail > a > .img-thumbnail').and('exist','/img/cars/lancia-ypsilon.jpg').should('be.visible')
       //cy.get('.thumbnail').find('img[srcset="/img/cars/mito.jpg"]')
       //.should('have.attr','srcset').and('exist','/img/cars/mito.jpg')
       //
     //  cy.request('https://buggy.justtestit.org/img/cars/mito.jpg').then((response) => {
  //expect(response.status).to.eq(200)
  //cy.visit('https://buggy.justtestit.org/img/cars/mito.jpg')
  
//})
       
      
      
    }
    
    )
})