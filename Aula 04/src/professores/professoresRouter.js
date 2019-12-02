const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log(req.query);
    res.send(req.query);
});

router.post("/", (req, res) => {
    console.log(req.query);
    res.send(req.query);
});

module.exports = router;