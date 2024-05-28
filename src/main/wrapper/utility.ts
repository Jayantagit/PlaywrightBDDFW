import { Page } from "@playwright/test"
export default class Helper {
    private page: Page

    constructor(page: Page) {
        this.page = page

    }

    async selectValueFromDropdown(locator: string, value: string) {
        await this.page.locator(locator).selectOption(value)
    }

    async waitAndClick(locator: string) {
        const element = await this.page.locator(locator)
        element.waitFor({
            state: "visible"
        })
        element.click()
    }



}
