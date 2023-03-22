import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import LandingPage from "../pages/landingPage";
import RegisterPage from "../pages/registerPage";
import WelcomePage from "../pages/welcomePage";
import AccountPage from "../pages/accountPage";

const landing = new LandingPage();
const welcome = new WelcomePage();
const register = new RegisterPage();
const account = new AccountPage();

let userName;
let password;

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


Given("The user register in the application with his personal data",(data)=>
{
    landing.openLandingPage();
    landing.openRegisterPage();
    register.fillValues(data);
    register.fillForm();
    register.logoutFromRegister();

    data.hashes().forEach((element)=>{
            userName = element.userName;
            password = element.password;
        })
});

When("he opens the application and do login",()=>
{
    landing.doLogin(userName, password);
});

Then("he successfully logged into the application",()=>
{
    account.checkLogin();
});