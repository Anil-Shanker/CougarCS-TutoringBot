import express from "express";
import cors from "cors";


import registerRoute from "./routes/register";
import logRoute from "./routes/log";
import statsRoute from "./routes/stats";
import tutoringTypesRoute from "./routes/tutoringTypes";

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.use(express.json());
app.use(cors());

app.use("/register", registerRoute);
app.use("/log", logRoute);
app.use("/stats", statsRoute);
app.use("/tutoringTypes", tutoringTypesRoute);


app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});