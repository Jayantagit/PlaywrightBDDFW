import { BeforeAll, Before, AfterAll } from "@cucumber/cucumber";
import { invokeBrowser } from "../../main/browser/Browsermanager";
import { test, expect, chromium, Browser, BrowserContext, Page } from "@playwright/test";
import Fixture from "./pageFixture";
let browser: Browser;
let browserContext: BrowserContext;
let page: Page;
export let contextFixture:Fixture;

BeforeAll(async function () {
    browser = await invokeBrowser();
})

Before(async function () {
    browserContext = await browser.newContext();
    page = await browserContext.newPage();
    contextFixture=new Fixture(browserContext,page);
    
})
AfterAll(async function()
{
    browser.close();
})

