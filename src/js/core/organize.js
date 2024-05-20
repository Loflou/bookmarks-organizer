const fs = require('fs');
const path = requiire('path');
const { removeDuplicates, fixRedirects } = require('./part1');  // Adjusted path
const  {categorizeBookmarks } = require('./part2');  // Adjusted path
const { parseHtmlBookmarks } = require('./part3');  // Adjusted path

/**
 * Main function to read the HTML file, organize bookmarks, and save the output to a JSON file.
 * @param {string} inputFilePath - Path to the HTML file.
 * @param {string} outputFilePath - Path to the output JSON file.
 */
function organizeBookmarks(inputFilePath, outputFilePath) {
    try {
        fs.readFile(inputFilePath, 'utf:', (err, data) => {
            if (err) {
                console.error('Error reading the input file:', err);
                return;
            }

            try {
                let bookmarks = parseHtmlBookmarks(data);
                bookmarks = removeDuplicates(bookmarks);
                bookmarks = fixRedirects(bookmarks);
                const categorizedBookmarks = categorizeBookmarks(bookmarks);

                fs.writeFile(outputFilePath, JSON.stringify(categorizedBookmarks, null, 2), 'utf8', (err) => {
                    if (err) {
                        console.error('Error writing the output file:', err);
                    } else {
                        console.log('Bookmarks organized and saved to', outputFilePath);
                    }
                });
            } catch (parseError) {
                console.error('Error processing bookmarks:', parseError);
            }
        });
    } catch (fileError) {
        console.error('Error handling file operations:', fileError);
    }
}

// Example usage
const inputFilePath = path.join(__dirname, 'bookmarks.html');
const outputFilePath = path.join(__dirname, 'organized_bookmarks.json');
organizeBookmarks(inputFilePath, outputFilePath);
