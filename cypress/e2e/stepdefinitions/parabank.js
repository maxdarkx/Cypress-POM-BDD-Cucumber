import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import LandingPage from "../pages/landingPage";
import RegisterPage from "../pages/registerPage";
import WelcomePage from "../pages/welcomePage";

const landing = new LandingPage();
const welcome = new WelcomePage();
const register = new RegisterPage();
let userName;

Given("The user open the application",()=>
{
    landing.openLandingPage();
});

When("He opened the register page and register his personal data",(data)=>
{
    landing.openRegisterPage();
    register.fillValues(data);
    register.fillForm();

    data.hashes().forEach((element)=>{
        userName = element.userName;
    })
});

Then("His account is activated and a welcome message is displayed",()=>
{
    welcome.setUsername(userName);
    welcome.checkWelcomeMessage();
});