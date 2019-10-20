!!!!IN DEVELOPMENT!!!!

OBJECTIVES:
  MVP:
      1. scrape screenshot of twitter handle's page with puppeteer              [!]
      2. scrape text element with puppeteer and return to console               [0]
      3. push users tweet text into an array                                    [0]
      4. take server req of twitter handle and serve users tweet array          [0]
  EXTENDED:
      5. expand user tweet array by automatically scrolling from the HB         [0]
      6. persist user tweets when desired                                       [0]
      7. automatically pull tweets then persist new ones                        [0]
      8. serve on droplet.                                                      [0]
      9. Allow all users to retrieve tweets and users with key to set up
         persistent tweet updates for specified twitter handles                 [0]

NOTES:
  To get page element with Puppeteer
    > const text = page.evaluate(() => document.querySelector('.scrape').textContent);
