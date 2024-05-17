import { Given, When, Then } from "@cucumber/cucumber";
import { test, expect, chromium, Browser, BrowserContext, Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import {contextFixture} from "../../main/Hooks/Hooks";

let loginPage: LoginPage;
let browser: Browser;
let browserContext: BrowserContext;
let page: Page;

Given('User Launch the Browser', async function () {
  this.page= contextFixture.getPage();
  loginPage = new LoginPage(this.page);

});



When('User enter navigates to {string}', async function (url) {
  await loginPage.navigateToURL(url);

});


Then('User enter username {string}', async function (userName) {

  await loginPage.enterUserName(userName);
});


Then('User enter password {string}', async function (password) {
  await loginPage.enterPassword(password)

});



Then('Click on Login button', async function () {
  await loginPage.clickOnLogin();
 // await page.close();
//  await browser.close();
  
});