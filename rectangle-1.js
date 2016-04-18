/**
 * Created by bastone on 16-4-15.
 */
/*
var rect={
    perimeter: function(){ return 2*(x+y)},
    area: function(){ return x*y}
};
*/
function rectangle(x,y){
    this.perimeter=function(){ return 2*(x+y);},
    this.area=function(){ return x*y;}
}
module.exports=function(x,y,callback){
    try{
        console.log("x="+x+"  y="+y+"  "+isNaN(y)+x.typeName);
        if (isNaN(x) || isNaN(y) || (x<=0) || (y<=0) ){
            throw new Error("Rectangle's long and breadth should be positive."+x+"  "+y);
        }
        else {
            callback(null, new rectangle(x,y));
        }
    }
    catch (e){
        callback(e,null);
    }
}


