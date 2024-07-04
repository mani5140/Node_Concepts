function extractFilename(data) {
    const lines = data.split('\n');
    
    if (lines.length > 1) {
        const secondLine = lines[1].trim();
        const match = /filename="([^"]+)"/.exec(secondLine);
        
        if (match) {
            return match[1];
        } else {
            throw new Error('Filename pattern not found in the second line.');
        }
    } else {
        throw new Error('There is no second line in the data.');
    }
}

module.exports = {extractFilename}
