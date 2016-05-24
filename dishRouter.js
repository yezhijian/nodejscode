/**
 * Created by bastone on 16-5-22.
 */

var express=require("express");
var morgan=require("morgan");
var bodyParser=require("body-parser");

var router=express.Router();
router.use(morgan("dev"));
router.use(bodyParser.json());

router.route('/').all(function (req, res, next) {
    res.writeHead(200,{"Content-Type" : "text/plain"});
    next();
}).get(function(req, res, next){
    res.end("you want to get all dishes list.");
}).post(function(req, res, next){
    res.end("now you want to add a number of dishes.");
}).delete(function(req, res, next){
    res.end("now you want to delete a number of dishes.");
});

router.route("/:dishId").all(function(req, res, next){
    res.writeHead(200, {"Content-Type" : "text/plain"});
    next();
}).get(function(req, res, next){
    res.end("You want to get the detail of the dish:"+req.params.dishId+"\n");
}).put(function(req, res, next){
    res.write("You want to update the detail of the dish:"+req.params.dishId+"\n")
    res.end("your data:"+req.body+"\n")
}).delete(function(req, res, next){
    res.end("You want to delete the dish:"+req.params.dishId+"\n");
});

module.exports=router;