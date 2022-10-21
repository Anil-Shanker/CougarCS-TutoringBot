import express from "express";
import cors from "cors";


import registerRoute from "./routes/register"

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.use(express.json());
app.use(cors());

app.use("/register", registerRoute);

app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});