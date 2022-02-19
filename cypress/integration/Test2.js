

/// <reference types="cypress" />
describe ('Test2',()=>{
    it('Broken Twitter link',()=>{
        
       
       cy.visit('https://buggy.justtestit.org/');
       cy.contains('Overall Rating')
       cy.get('[src="/img/overall.jpg"]').trigger('mouseover').click();
       cy.get('[title="Twitter"]').invoke('attr', 'href').should('include', 'https://www.twitter.com/')
       //cy.get('[title="Twitter"]').invoke('attr', 'href').should('include', 'https://www.twitter-broken.com/')       'This code will able to test that broken link is verified
       //cy.get('[title="Twitter"] > img').trigger('mouseover').click();  'This command will run to test for broken link for verification purpose
       



    }
    
    )
})