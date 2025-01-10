import { Page } from "puppeteer"
import { PuppeteerExtraPlugin } from "puppeteer-extra-plugin"
import getRandomBrowser from "./utils/browsers"
import getRandomOs from "./utils/platform"


class T2PuppeteerRandomUa extends PuppeteerExtraPlugin {
    constructor(opts = {}) {
        super(opts)
    }
    get name() {
        return "user-agent"
    }
    async onPageCreated(page: Page): Promise<void> {
        const platform = getRandomOs()
        const browser = getRandomBrowser()
        const ua = browser.replace("%PLAT%", platform)
        await page.setUserAgent(ua)
    }
}


export default function randomUserAgent(opts?: Record<string,any>): T2PuppeteerRandomUa {
    return new T2PuppeteerRandomUa(opts);
}