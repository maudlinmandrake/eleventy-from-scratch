const {dest, src} = require("gulp");
const cleanCSS = require("gulp-clean-css");
const sassProcessor = require("gulp-sass");

// We want to be using canonical Sass, rather than node-sass
sassProcessor.compiler = require("sass");

// Flags whether we compress the output etc
const isProduction = process.env.NODE_ENV === "production";

// An array of outputs that should be sent over to includes
const criticalSStyles = ["critical.scss", "home.scss", "page.scss", "work-items.scss"];

// Takes arguments passed by "dest" and determines where the output file goes
const calculateOutput = ({history}) => {
  // By default, we want a CSS filed in our dist directory, so the
  // HTML can grab it with a <link />
  let response = "./dist/css";

  // Get everything after the last slash
  const sourceFileName = /[^/]*$/.exec(history[0])[0];

  // If this is a critical CSS though, we want it to go
  // to the _includes directory, so nunjucks can include it
  // directly in a <style>
  if(criticalSStyles.includes(sourceFileName)) {
    response = "./src/_includes/css";
  }

  return response;
};