import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

When("The user makes a request to list user #{string}", (user)=> {
   cy.readFile('environment.json').then((data)=>{
    cy.request('GET', data.reqres.url + data.reqres.api_users + user).as('bodyReturn');
   });

});

Then("the request is completed succesfully", ()=>{
    cy.get('@bodyReturn').should((response => {
        expect(response.body.data.email).to.eql('janet.weaver@reqres.in');
    }))
});