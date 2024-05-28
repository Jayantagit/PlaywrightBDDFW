import { Given, When, Then } from "@cucumber/cucumber";
import AdminPage from "../pages/AdminPage";
import { test, expect, chromium, Browser, BrowserContext, Page } from "@playwright/test";
import { contextFixture } from "../../main/Hooks/Hooks";

let page: Page;
let adminPage: AdminPage;

Then('User click on Admin Link', async function () {
    this.page = contextFixture.getPage();
    adminPage = new AdminPage(this.page);
    await adminPage.navigatoAdminPage();


});

Then('User validate the Admin Page Header', async function () {

    await adminPage.assertadminHeaderDisplayed();

});

Then('User select the employment status {string}', async function (userRole) {

    await adminPage.clickOnEmpRole()
    await adminPage.selectRole(userRole)
   
  });