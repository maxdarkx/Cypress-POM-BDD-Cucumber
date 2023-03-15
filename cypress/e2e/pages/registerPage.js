class RegisterPage
{
    firstNameInput;
    lastNameInput;
    streetInput;
    cityInput;
    stateInput;
    zipCodeInput;
    phoneNumberInput;
    ssnInput;
    userNameInput;
    passwordInput;
    repeatedPasswordInput;
    registerButton;

    firstNameValue;
    lastNameValue;
    streetValue;
    cityValue;
    stateValue;
    zipCodeValue;
    phoneNumberValue;
    ssnValue;
    userNameValue;
    passwordValue;

    constructor()
    {
        this.firstNameInput = '[name="customer.firstName"]';
        this.lastNameInput = '[name="customer.lastName"]';
        this.streetInput = '[name="customer.address.street"]';
        this.cityInput = '[name="customer.address.city"]';
        this.stateInput = '[name="customer.address.state"]';
        this.zipCodeInput = '[name="customer.address.zipCode"]';
        this.phoneNumberInput = '[name="customer.phoneNumber"]';
        this.ssnInput = '[name="customer.ssn"]';
        this.userNameInput = '[name="customer.username"]';
        this.passwordInput = '[name="customer.password"]';
        this.repeatedPasswordInput = '[name="repeatedPassword"]';
        this.registerButton = 'input[value="Register"]';
    }

    fillValues(dataTable)
    {
        dataTable.hashes().forEach((data)=>{
                this.firstNameValue = data.firstName;
                this.lastNameValue = data.lastName;
                this.streetValue = data.street;
                this.cityValue = data.city;
                this.stateValue = data.state;
                this.zipCodeValue = data.zipCode;
                this.phoneNumberValue = data.phoneNumber;
                this.ssnValue = data.ssn;
                this.userNameValue = data.userName;
                this.passwordValue = data.password;
        });
    }


    fillForm()
    {
        cy.get(this.firstNameInput).type(this.firstNameValue);
        cy.get(this.lastNameInput).type(this.lastNameValue);
        cy.get(this.streetInput).type(this.streetValue);
        cy.get(this.cityInput).type(this.cityValue);
        cy.get(this.stateInput).type(this.stateValue);
        cy.get(this.zipCodeInput).type(this.zipCodeValue);
        cy.get(this.phoneNumberInput).type(this.phoneNumberValue);
        cy.get(this.ssnInput).type(this.ssnValue);
        cy.get(this.userNameInput).type(this.userNameValue);
        cy.get(this.passwordInput).type(this.passwordValue);
        cy.get(this.repeatedPasswordInput).type(this.passwordValue);
        cy.get(this.registerButton).click();
    }
}

export default RegisterPage;