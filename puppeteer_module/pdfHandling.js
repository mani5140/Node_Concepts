const express = require('express');
const multer = require('multer');
const pdf = require('pdf-parse');
const fs = require('fs');
const path = require('path');
const { Document, Packer, Paragraph, TextRun } = require('docx');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('pdf'), async (req, res) => {
    const filePath = req.file.path;
    const fileBuffer = fs.readFileSync(filePath);

    try {
        const data = await pdf(fileBuffer);

        const numPages = data.numpages;
        console.log(`Number of pages: ${numPages}`);

        const chapterRegex = /CHAPTER\s+\d+\s+([A-Za-z\s]+)/g;
        const chapterNames = [];
        let match;
        while ((match = chapterRegex.exec(data.text)) !== null) {
            chapterNames.push(match[0]);
        }
        console.log(`Chapter names: ${chapterNames}`);

        const doc = new Document({
            sections: [
                {
                    properties: {},
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun(data.text),
                            ],
                        }),
                    ],
                },
            ],
        });

        const wordBuffer = await Packer.toBuffer(doc);
        const wordFilePath = path.join(__dirname, '/uploads/output.docx');
        fs.writeFileSync(wordFilePath, wordBuffer);

        res.json({
            message: 'File processed successfully',
            numPages,
            chapterNames,
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to process PDF' });
        console.log(err);
    } finally {
        fs.unlinkSync(filePath);
    }
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
