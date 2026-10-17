const router = require("express").Router();
// Reads an environment variable: the deploy page should offer GREETING.
router.get("/", (_req, res) => res.json({ message: process.env.GREETING || "no GREETING set" }));
module.exports = router;
