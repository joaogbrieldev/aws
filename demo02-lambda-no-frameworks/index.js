async function handler(event, context) {
  console.log("Context", context);
  console.log("Event", event);

  return {
    statusCode: 200,
    body: JSON.stringify({
      Hey: "Jude!",
    }),
  };
}

module.exports = {
  handler,
};
