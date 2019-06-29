const express = require("express");
const app = express();
var reload = require('reload')

const port = 3000

app.use(express.static("./public"))

reload(app);

app.get('/', (req, res) => res.render("index.html"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))