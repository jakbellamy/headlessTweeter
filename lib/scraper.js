import puppeteer from 'puppeteer'

const scraper = async (user) => {
  const userTweetsURL = `https://twitter.com/search?q=from%3A${user}&src=typed_query&f=live`
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(userTweetsURL);
  await page.screenshot({path: 'example.png'});

  await browser.close();
};

export {scraper}
