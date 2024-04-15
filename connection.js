const moongose = require("mongoose");

async function ConnectToMongoDB(url) {
  await moongose.connect(url);
}

module.exports = {
  ConnectToMongoDB,
};
