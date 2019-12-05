const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log(req.query);
    res.send(req.query);
});

router.post("/", (req, res) => {
    console.log(req.query);
    res.send(req.body);
});

router.delete("/:salaId", (req, res) => {
    console.log(req.params);
    res.send(req.params);
});

router.put("/", (req, res) => {
    console.log(req.query);
    res.send(req.body);
});

module.exports = router;