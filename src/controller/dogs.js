const dogs = require("../model/dogs");

module.exports = {
    all: (req,res) => {
        res.json(dogs);
    },
    get: (req,res) => {
        res.json(dogs[req.params.id]);
    },
    search: (req,res) => {
        res.json(dogs.filter(dog => dog.includes(req.params.name)));
    }
};