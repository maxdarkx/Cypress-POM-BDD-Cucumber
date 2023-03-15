class WelcomePage
{
    userName;

    setUsername(user)
    {
        this.userName = user;
    }
    checkWelcomeMessage()
    {
        const welcomeMessage = 'Welcome ' + this.userName;
        cy.get('.title').should('have.text', welcomeMessage);
    }
}

export default WelcomePage;