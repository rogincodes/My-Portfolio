const express = require("express");
const app = express();

const port = 8000;

app.use(express.static("public"))

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render(("index"))
})

app.listen(process.env.PORT || port);