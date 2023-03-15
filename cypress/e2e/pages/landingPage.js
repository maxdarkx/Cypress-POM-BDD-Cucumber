class LandingPage
{
    openLandingPage()
    {
        return cy.visit('/');
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