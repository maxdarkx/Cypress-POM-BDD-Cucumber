class WelcomePage
{
    checkWelcomeMessage()
    {
        cy.get('.title').should('have.text', 'Welcome juanmaya1');  
    }
}

export default WelcomePage;