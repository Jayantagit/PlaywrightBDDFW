import { expect, type Page, type Locator } from "@playwright/test"
import Helper from "../../main/wrapper/utility"
export default class AdminPage {
    private page: Page
    private adminLink: Locator
    private adminPageHeader: Locator
    private userRoleDropdown: string = "//label[text()='User Role']/parent::div/following-sibling::div//div[contains(@class,'select-text-input')]";
    private statusOptions: string = "div.oxd-select-option";
    private helper:Helper

    constructor(page: Page) {
        this.page = page
        this.helper=new Helper(this.page)
        this.adminLink = page.locator("//a[contains(@href,'admin')]")
        this.adminPageHeader = page.locator("//h5[text()='System Users']")

    }

    async navigatoAdminPage() {

        await this.adminLink.click();

    }
    async assertadminHeaderDisplayed() {

        await expect(this.adminPageHeader).toBeVisible()

    }
    async clickOnEmpRole() {
       // await this.page.locator(this.userRoleDropdown).click()
        await this.helper.waitAndClick(this.userRoleDropdown)
    }
    async selectRole(userRole: string) {
        const roles = await this.page.locator(this.statusOptions)
        for (let i = 0; i < await roles.count(); i++) {
            let val = await roles.nth(i).textContent()
            if (val == userRole) {
                roles.nth(i).click()
                break
            }

        }
    }



}