const app = require("./app");
const dotEnv = require("dotenv");

dotEnv.config({ path: "./config.env" });

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`App is listening at the port : ${PORT}`);
});
