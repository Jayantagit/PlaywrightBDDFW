import { expect, type Page, type Locator } from "@playwright/test"
export class AdminPage {
    private page: Page
    private adminLink: Locator
    private adminPageHeader: Locator


    constructor(page: Page) {
        this.page = page
        this.adminLink = page.locator("//a[contains(@href,'admin')]")
        this.adminPageHeader = page.locator("//h5[text()='System Users']")

    }

    async navigatoAdminPage() {
        
        await this.adminLink.click();

    }
    async assertadminHeaderDisplayed() {
        
        await  expect(this.adminPageHeader).toBeVisible()

    }



}