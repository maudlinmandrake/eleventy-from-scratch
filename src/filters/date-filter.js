const moment = require("moment");
const { isModuleDeclaration } = require("babel-types");

module.exports = value => {
  const dateObject = moment(value);
  return`${dateObject.format("Do")} of ${dateObject.format("MMMM YYYY")}`;
};