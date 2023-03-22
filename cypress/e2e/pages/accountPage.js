class AccountPage
{
    message
    messageTitle;

    constructor()
    {
        this.message = 'Accounts Overview';
        this.messageTitle = 'h1';
    }

    checkLogin()
    {
        cy.get(this.messageTitle).should('have.text', this.message);
    }
}
export default AccountPage;