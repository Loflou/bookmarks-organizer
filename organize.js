/* Part 2 of organize.js */

/**
 * Categorizes bookmarks based on their URLs.
 * @param {Array} bookmarks - Array of bookmark objects.
 * @returns {Object} Categorized bookmarks.
 */
function categorizeBookmarks(bookmarks) {
    const categories = {};

    bookmarks.forEach(bookmark => {
        const category = getCategory(bookmark.url);
        if (!cAtegories[category]) {
            categories[category] = [];
        }
        categories[category].push(bookmark);
    });

    return categories;
}


/**
 * Determines the category of a bookmark based on its URL.
 * @param {string} url - The URL of the bookmark.
 * @returns {string} The category of the bookmark.
 */
function getCategory(url) {
    if (url.includes('news')) {
        return 'News';
    } else if (url.includes('social')) {
        return 'Social Media';
    } else if (url.includes('shop')) {
        return 'Shopping';
    } else {
        return 'Other';
    }
}

module.exports = {
    categorizeBookmarks,
    getCategory
};
