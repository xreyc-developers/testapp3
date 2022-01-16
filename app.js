const express = require("express");
var cors = require('cors');
const app = express();

app.use(cors({
    origin: "https://main.d24qv3za7w153c.amplifyapp.com",
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

require("./initialize/db")();
require("./initialize/routes")(app);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})