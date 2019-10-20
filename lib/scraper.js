import puppeteer from "puppeteer";
import { twitter } from "./constants.js";

const scraper = async user => {
  // console.log(twitter)
  const userTweetsURL = `https://twitter.com/search?q=from%3A${user}&src=typed_query&f=live`;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(userTweetsURL);

  const tweet = await page.evaluate(
    () =>
      document.querySelector(
      "p.TweetTextSize.js-tweet-text"
      ).textContent
  );

  console.log(tweet);
  await browser.close();
};

export { scraper };
