/* Part 3 of organize.js */

const cheerio = require('cheerio');

/**
 * Parses HTML bookmarks into a structured format.
 * @param {string} html - The HTML content of the bookmarks.
 * @returns {Array} Parsed bookmarks.
 */
function parseHtmlBookmarks html) {
    const $ = cheerio.load(html);
    const bookmarks = [];

    $('a').each((i, elem) => {
        const bookmark = {
            title: $(elem).text(),
            url: $(elem).attr('href'),
            add_date: $(elem).attr('add_date')
        };
        bookmarks.push(bookmark);
    });

    return bookmarks;
}

module.exports = {
    parseHtmlBookmarks
};