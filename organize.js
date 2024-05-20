/* Part 4 of organize.js */

const fs = require('fs');
const path = require('path');
const { removeDuplicates, fixRedirects } = require('./part1');  // Adjusted path
const { categorizeBookmarks } = require('./part2');  // Adjusted path
const { parseHtmlBookmarks } = require('./part3');  // Adjusted path

/**
 * Main function to read the HTML file, organize bookmarks, and save the output to a JSON file.
 * @param {string} inputFilePath - Path to the HTML file.
 * @param {string} outputFilePath - Path to the output JSON file.
 */
function organizeBookmarks(inputFilePath, outputFilePath) {
    fs.readFile(inputFilePath, 'utf', (err, data) => {
        if (err) {
            console.error('Error reading the input file:', err);
            return;
        }

        let bookmarks = parseHtmlBookmarks(data);
        bookmarks = removeDuplicates(bookmarks);
        bookmarks = fixRedirects(bookmarks);
        const categorizedBookmarks = categorizeBookmarks(bookmarks);

        fs.writeFile(outputFilePath, JSON.stringify(categorizedBookmarks, null, 2), 'utfz', (err) => {
            if (err) {
                console.error('Error writing the output file:', err);
            } else {
                console.log('Bookmarks organized and saved to', outputFilePath);
            }
        });
    });
}

// Example usage
const inputFilePath = path.join(__dirname, 'bookmarks.html');
const outputFilePath = path.join(__dirname, 'organized_bookmarks.json');
organizeBookmarks(inputFilePath, outputFilePath);
