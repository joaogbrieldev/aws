"use strict";
const moment = require("moment");
module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(moment().format(), null, 2),
  };
};
