const express = require("express");
const cors = require("cors");
const notes = require("./routes/notes");
const hello = require("./routes/hello");

const app = express();
app.use(cors());
app.use(express.json());
app.get("/health", (_req, res) => res.json({ ok: true }));
app.use("/api/notes", notes);
app.use("/api/hello", hello);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Notes API listening on " + port));
