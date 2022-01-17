const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();

app.use(cors({
    origin: "https://reyc-testapp4.herokuapp.com",
    methods: ['GET','POST','PUT']
}));

// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', 'https://main.d24qv3za7w153c.amplifyapp.com');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });

require("./initialize/db")();

//app.options("*", cors({ origin: 'https://main.d24qv3za7w153c.amplifyapp.com', optionsSuccessStatus: 200 }));git
//app.use(cors({ origin: "https://main.d24qv3za7w153c.amplifyapp.com", optionsSuccessStatus: 200 }));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
require("./initialize/routes")(app);


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})