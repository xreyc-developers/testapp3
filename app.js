const express = require("express");
var cors = require('cors');
const app = express();

app.use(cors());

require("./initialize/db")();
require("./initialize/routes")(app);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})