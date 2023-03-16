class LandingPage
{
    openLandingPage()
    {
        cy.readFile('environment.json').then((data)=>{
            cy.wrap(data.parabank.url).as('url')
        )};
        return cy.visit(@url);
    }

    openRegisterPage()
    {
        cy.get('#loginPanel').within(($loginpanel) => {
            cy.get('a')
                .contains('Register')
                .click();
        });
    }
}
export default LandingPage;