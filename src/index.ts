import { PuppeteerExtraPlugin } from "puppeteer-extra-plugin"
import getRandomBrowser from "./utils/browsers"
import getRandomOs from "./utils/platform"

export default class T2PuppeteerRandomUa extends PuppeteerExtraPlugin {
    constructor(opts = {}) {
        super(opts)
    }
    get name() {
        return "user-agent"
    }
    async onPageCreated(page: any): Promise<void> {
        const platform = getRandomOs()
        const browser = getRandomBrowser()
        const ua = browser.replace("%PLAT%", platform)
        await page.setUserAgent(ua)
    }
}
