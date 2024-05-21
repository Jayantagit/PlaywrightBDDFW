import { BeforeAll, Before, AfterAll, AfterStep, Status } from "@cucumber/cucumber";
import { invokeBrowser } from "../../main/browser/Browsermanager";
import { test, expect, chromium, Browser, BrowserContext, Page } from "@playwright/test";
import Fixture from "./pageFixture";
import { time } from "console";
let browser: Browser;
let browserContext: BrowserContext;
let page: Page;
export let contextFixture: Fixture;

BeforeAll(async function () {
    browser = await invokeBrowser();
})

Before(async function () {
    browserContext = await browser.newContext();
    page = await browserContext.newPage();
    contextFixture = new Fixture(browserContext, page);

})
AfterAll(async function () {
    // page.close();
    browser.close();
})

AfterStep(async function ({ result,pickle }) {
    let img: Buffer;
    const d = new Date();
    let time = d.getTime();
    let screenShotName = pickle.name +"_"+ time + ".png";
    if (result.status == Status.FAILED) {
        img = await contextFixture.getPage().screenshot({ path: "./test-result/screenshot/" + screenShotName, "type": "png" });
        this.attach(img, 'image/png');

    }


})

