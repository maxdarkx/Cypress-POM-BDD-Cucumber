import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import LandingPage from "../pages/landingPage";
import RegisterPage from "../pages/registerPage";
import WelcomePage from "../pages/welcomePage";

const landing = new LandingPage();
const welcome = new WelcomePage();
const register = new RegisterPage();
    

Given("The user open the application",()=>
{
    landing.openLandingPage();
});

When("He opened the register page and register his personal data",()=>
{
    landing.openRegisterPage();
    register.fillValues('juan', 'maya', 'calle 111', 'medellin', 'antioquia','050088', '+573012405678',
        '0001', 'juan_maya1000', 'juan_maya' );        
    register.fillForm();
});

Then("His account is activated and a welcome message is displayed",()=>
{
    welcome.checkWelcomeMessage();
});