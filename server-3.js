/**
 * Created by bastone on 16-5-21.
 */
var http=require("http"), express=require("express");
var morgan=require("morgan"), bodyParser=require("body-parser");
var port=3000, hostname="localhost";
var app=express();
app.use(morgan("dev"));
//app.use(bodyParser.json());

var dishRouter=require("./dishRouter.js");
//var promoRouter=require("./promoRouter.js"), leaderRouter=require("./leaderRouter.js");
app.use("/dishes", dishRouter);
//app.use("/ptomotions", prroomoRouter);
//app.use("/leaders", leaderRouter);

app.listen(port, hostname, function(){
    console.log(`server listening on http://${hostname}:${port}/`);
})