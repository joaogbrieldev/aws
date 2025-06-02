module.exports.public = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify([{ id: 1, name: "Flash", power: "Speed" }]),
  };
};

module.exports.private = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify([{ id: 2, name: "Batman", power: "Rich" }]),
  };
};
