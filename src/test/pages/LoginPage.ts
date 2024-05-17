import { expect, type Page, type Locator } from "@playwright/test"
export class LoginPage {
    private page: Page
    private userName: Locator
    private password: Locator
    private submit: Locator


    constructor(page: Page) {
        this.page = page
        this.userName = page.getByPlaceholder("Username")
        this.password = page.getByPlaceholder("Password")
        this.submit = page.locator("//button[@type='submit']")
       

    }

   async navigateToURL(url:any) {
       await this.page.goto(url);       

    }
    async enterUserName(username:any) {

        await this.userName.clear();
        await this.userName.fill(username);

    }
    async enterPassword(pwd:any) {

        await this.password.clear();
        await this.password.fill(pwd);

    }
    async clickOnLogin() {
        await this.submit.click();
        //await this.page.waitForTimeout(5000);
    }

   
}