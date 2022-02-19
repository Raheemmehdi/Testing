beforeEach(() => {
    cy.visit('https://buggy.justtestit.org/')
    cy.contains('Overall Rating')
    cy.get('[src="/img/overall.jpg"]').trigger('mouseover').click();
    cy.get('.pull-xs-right > .form-control').clear() 
})

it('Check that if you find table/data on the page, then click on for next page till page# exceed the actuall page# and validate ', () => {
     for (let i = 0; i < 10; i++)
{    cy.get('body').then((body) => {
        if (body.find('tbody > tr > :nth-child(2)').length > 0) {
            cy.get('.row > .pull-xs-right').click();
        }
        else {
            cy.get('tbody > tr > :nth-child(2)').click
            console.log("Error in paging")
        }
    })
    }
})