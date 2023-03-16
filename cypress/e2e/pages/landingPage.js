class LandingPage
{
    openLandingPage()
    {
        cy.readFile('environment.json').then((data)=>{
            cy.visit(data.parabank.url);
        });

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