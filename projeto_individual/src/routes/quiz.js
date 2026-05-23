var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/inserir", function (req, res) {
    quizController.inserir(req, res);
});

module.exports = router;