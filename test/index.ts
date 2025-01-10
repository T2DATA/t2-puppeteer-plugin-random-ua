import puppeteer from 'puppeteer';
import randomUserAgent from 't2-puppeteer-plugin-random-ua';


(async () => {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Attach the plugin
  randomUserAgent(page).onPageCreated(page)
  
  await page.goto('https://example.com');

  console.log(await page.evaluate(() => navigator.userAgent));

  await browser.close();
})();

