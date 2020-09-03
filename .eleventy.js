module.exports = config => {
  // Set directories to pass through to the dist folder
config.addPassthroughCopy('./src/images/');

// Returns work items, sored by display order
const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};