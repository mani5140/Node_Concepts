const puppeteer = require("puppeteer");

const getPdf = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.google.com/", {
    waitUntil: "networkidle2",
  });
  // Saves the PDF to hn.pdf.
  await page.pdf({
    path: "hn.pdf",
  });

  await browser.close();
};

getPdf();
