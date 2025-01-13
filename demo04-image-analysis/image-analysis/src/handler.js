module.exports = class Handler {
  constructor({ rekoSvc, translaterSvc }) {
    (this.rekoSvc = rekoSvc), (this.translaterSvc = translaterSvc);
  }
  async main(event) {
    console.log("event", event);
    return {
      statusCode: 200,
      body: "Hello!",
    };
  }
};
