import { config } from "dotenv";
import { connect } from "mongoose";
import path from "path";

import app from "./app.js";

config({ path: "./.env" });
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});

module.exports = app;
