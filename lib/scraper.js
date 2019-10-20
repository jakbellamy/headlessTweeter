import puppeteer from "puppeteer";
import { twitter } from "./constants.js";

const scraper = async user => {
  const userTweetsURL = `https://twitter.com/search?q=from%3A${user}&src=typed_query&f=live`;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(userTweetsURL);

  const tweets = await page.evaluate(
    () =>
      Array.from(document.querySelectorAll(
      "p.TweetTextSize.js-tweet-text"
    )).map(tweet => tweet.textContent)
  );

  console.log(tweets);
  await browser.close();
};

export { scraper };
