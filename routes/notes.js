const router = require("express").Router();
const store = require("../lib/store");
router.get("/", (_req, res) => res.json(store.all()));
router.post("/", (req, res) => {
  const text = req.body && req.body.text;
  if (typeof text !== "string" || !text.trim()) return res.status(400).json({ error: "text is required" });
  res.status(201).json(store.add(text.trim()));
});
module.exports = router;
