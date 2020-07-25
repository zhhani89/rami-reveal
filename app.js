const express = require("express");
const app = express();
const http = require("http");

const bodyparser = require("body-parser");

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }));




app.get("/", function (req, res) {

        res.render("home")
         
});

app.get("/names", function(req,res){
    res.render("names");
});


app.listen(process.env.PORT || 3000, () => {
    console.log(`listening to ${process.env.PORT || 3000}`);
})