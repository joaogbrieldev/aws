const aws = require("aws-sdk");
const Handler = require("./handler");

const reko = new aws.Rekognition();
const translatorSvc = new aws.Translate();

const handler = new Handler({
  reko,
  translatorSvc,
});

module.exports = handler.main.bind(handler);
