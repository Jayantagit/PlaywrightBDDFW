import { chromium } from "@playwright/test"

const options = {
    headless: false,
    channel: "chrome",
    args: ["--start-maximize"]

}
export const invokeBrowser = () => {
    return chromium.launch(options);
}
