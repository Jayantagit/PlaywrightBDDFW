import { BrowserContext, Page } from "@playwright/test";

export default class Fixture {
    private browserContext: BrowserContext;
    private page: Page;

    constructor(browserContext:BrowserContext, page:Page) {
        this.browserContext = browserContext;
        this.page = page;
    }

    getPage():Page {
        return  this.page;
    }  

    getBrowserContext() {
        return this.browserContext;
    }

   
}