class LandingPage
{
    openLandingPage()
    {
        cy.visit('/');
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