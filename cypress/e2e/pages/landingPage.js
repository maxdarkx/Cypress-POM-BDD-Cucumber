class LandingPage
{
    usernameInput;
    passwordInput;
    loginButton;

    constructor()
    {
        this.usernameInput = 'input[name="username"]';
        this.passwordInput = 'input[name="password"]';
        this.loginButton = '.button[value= "Log In"]';
    }

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

    doLogin(user, pass)
    {
        cy.get(this.usernameInput).type(user);
        cy.get(this.passwordInput).type(pass);
        cy.get(this.loginButton).click();
    }
}
export default LandingPage;