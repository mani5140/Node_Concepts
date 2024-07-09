const express = require('express');
const multer = require('multer');
const puppeteer = require('puppeteer');
const fs = require('fs');
const docx = require('docx');

const app = express();

const upload = multer({ dest: './uploads/' });

app.post('/upload', upload.single('pdf'), async (req, res) => {
  const pdfFile = req.file;
  const pdfPath = `${__dirname}/uploads/${pdfFile.filename}`;

  // Open the PDF file using Puppeteer
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(pdfPath, { waitUntil: 'networkidle0', timeout: 60000 });

  // Get the chapter name from the PDF file
  const chapterName = await page.evaluate(() => {
    const text = document.body.textContent;
    const chapterRegex = /Chapter (\d+): (.*)/g;
    const match = chapterRegex.exec(text);
    return match && match[2];
  });

  // Parse the PDF content to a Word file
  const pdfContent = await page.content();
  const doc = new docx.Document();
  const paragraph = doc.addParagraph(pdfContent);
  const wordBuffer = await doc.generate();

  // Save the Word file
  const wordPath = `./uploads/${pdfFile.originalname}.docx`;
  fs.writeFileSync(wordPath, wordBuffer);

  // Get the number of pages in the PDF file
  const numPages = await page.evaluate(() => {
    return document.querySelectorAll('div.page').length;
  });

  // Close the browser instance
  await browser.close();

  res.json({
    chapterName,
    numPages,
    wordPath,
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});