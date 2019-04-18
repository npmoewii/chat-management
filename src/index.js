import express from "express";
import bodyParser from "body-parser";
import router from "./router";

import { PORT } from "./config";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
