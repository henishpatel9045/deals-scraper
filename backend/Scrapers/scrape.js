const puppetter = require("puppeteer");

const storeNames = async (page, url) => {
  await page.goto(url);
  await page.waitForSelector("li.second-li");
  const demo = await page.evaluate(() => {
    console.log("start");
    let offers = Array.from(document.querySelectorAll("li.second-li"));

    return offers.map((i) => {
      return {
        offer: i.firstChild.textContent,
        promo: i.lastChild.textContent,
      };
    });
  });

  return demo;
};

const main = async () => {
  const browser = await puppetter.launch({ headless: true });
  const page = await browser.newPage();
  await page.setRequestInterception(true);
  page.on("request", (req) => {
    if (
      req.resourceType() == "stylesheet" ||
      req.resourceType() == "font" ||
      req.resourceType() == "image"
    ) {
      req.abort();
    } else {
      req.continue();
    }
  });
  await page.goto("https://lapinozpizza.in/online-order");

  const cities = await page.evaluate(() => {
    return city;
  });

  let offersData = [];
  // let counter = 0;
  for (let city in cities) {
    let outlets = cities[city];
    let cityData = { city: city, outlets: [] };
    for (let ind in outlets) {
      try {
        // if (counter++ >= 5) {
        //   break;
        // }
        let outlet = outlets[ind];
        console.log(outlet?.web_slug);
        let outletUrl = "https://lapinozpizza.in/order/" + outlet?.web_slug;
        let offers = await storeNames(page, outletUrl);
        cityData.outlets.push({
          offers: offers,
          outletName: outlet?.locality,
          ...outlet,
        });
      } catch (error) {
        console.log(error);
        continue;
      }
    }
    offersData.push(cityData);
  }
  return offersData;
};

module.exports = main;
