****IN DEVELOPMENT****

**Objectives:**  
&nbsp;&nbsp;&nbsp;
MVP:  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      1. ~~scrape screenshot of twitter handle's page with puppeteer~~  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      2. ~~scrape text element with puppeteer and return to console~~   
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      3. ~~push users tweet text into an array~~  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      4. ~~take server req of twitter handle and serve users tweet array~~  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
  &nbsp;&nbsp;&nbsp;
  EXTENDED:  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      5. expand user tweet array by automatically scrolling from the HB   
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      6. persist user tweets when desired  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      7. automatically pull tweets then persist new ones  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      8. serve on droplet.  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      9. Allow all users to retrieve tweets and users with key to set up
         persistent tweet updates for specified twitter handles  

**NOTES:**  
  *To get page element with Puppeteer*  
      `const text = page.evaluate(() => document.querySelector('.scrape').textContent);`
