const express = require("express");
const app = express();
const routes = require("./routes/index");



app.use(express.static('public'));
app.use(routes);

app.use((req,res) => {
    res.status(404).send("page not found");
});
app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});


module.exports = app;