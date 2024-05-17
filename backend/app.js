import config from "dotenv";
import express from "express";
import cors from "cors";

import passRouter from "./routes/passwordRoute";

const app = express();

const fetch = (...args) =>
    import("node-fetch").then(({ default: fetch }) => fetch(...args));


app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use("/", express.static("public"));
app.use("/api/v1/password", passRouter);
export default app;
