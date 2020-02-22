const cats = require("../model/cats");

module.exports = {
    index: (req,res) => {
        res.send(cats.about);
    },
    names: (req,res) => {
        res.json(cats.names);
    }
};