/**
 * Created by bastone on 16-4-15.
 */
var yargs=require("yargs");
var argv=yargs.usage("Usage: $0 -l [num]  -b [num].").demand(["l", "b"]).argv;

var rect=require('./rectangle-1.js');

rect(argv.l, argv.b, function(err,rectangle){
    if (!err){
        console.log(rectangle.perimeter());
        console.log(rectangle.area());
    }else {
        console.log(err.message);
    }
});
