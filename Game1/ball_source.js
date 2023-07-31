var can=document.querySelector("canvas");
can.width=window.innerWidth;
can.height=window.innerHeight;
var c=can.getContext("2d");
const BALLRADIUS = 10;
const GRAVITY = 9.8;
const SCALINGFACTOR=40;
const DISTANCEMAX=1000;

var clicked=false;

var onceClicked = 0;

var initial = {
    x:0,
    y:0
}
var final = {
    x:0,
    y:0
}
// var ballPosition={
//     x:200,
//     y:200
// }

var lastLocation={
    x:100,
    y:100
}
// var xInitial = 0;
// var yInitial = 0;
// var xFinal = 0;
// var yFinal = 0;
var clickTime=0;
var upTime=1;
function mouseOnClick(event){
    clicked=true;
    initial.x = event.clientX;
    initial.y  = event.clientY;
    if(clickTime<=upTime){
        initial.x = event.clientX;
        initial.y  = event.clientY;
    }
    clickTime=new Date().getTime()
    //console.log(xInitial,yInitial,xFinal,yFinal);
    //coords = "X coords: " + x + ", Y coords: " + y;
    // var x = event.clientX;
    // var y = event.clientY;
    // var coords = "X coords: " + x + ", Y coords: " + y;
    //alert(coords);
    
}
clickFromTime=0;
var numberOfMouseUp=0;  
var timeStarting=[0];
function mouseUp(event) {
    clicked=false;
    upTime=new Date().getTime()
    numberOfMouseUp=numberOfMouseUp+1;
    final.x = event.clientX;
    final.y = event.clientY;
    timeStarting.push(new Date().getTime());
    onceClicked=onceClicked+1;
    clickFromTime=new Date().getTime();
    //console.log(angleBetween(initial,final));
    //console.log(xInitial,yInitial,xFinal,yFinal);
    //var coords = "X coords: " + x + ", Y coords: " + y;
   // alert(coords);
  }

function distanceBetween(p1,p2) {
    var dis=Math.sqrt(Math.pow(p1.x-p2.x,2)+Math.pow(p1.y-p2.y,2))
    if(dis>=DISTANCEMAX){
        return DISTANCEMAX;
    }
    return dis;}

function angleBetween(p1, p2) {
    return Math.atan2(p2.y-p1.y, p2.x-p1.x);
}

function drawBall(ballPosition,ballRadius){
    c.beginPath();
    c.arc(ballPosition.x, ballPosition.y, ballRadius, 0, 2 * Math.PI, false);
    c.fillStyle = 'green';
    c.fill();
    c.lineWidth = 5;
    c.strokeStyle = '#003300';
    c.stroke();


}


function draw(ballPosition,BALLRADIUS){
    c.fillStyle="blue";
    c.fillRect(0,0,100,100);
    drawBall(ballPosition,BALLRADIUS);

}

function update(ballPosition,vx,vy){
    c.clearRect(0,0,can.width,can.height);
    var currentTime= new Date().getTime()
    if(clickFromTime==0){
        var newX=ballPosition.x;
        var newY=ballPosition.y;
    }
    else{
        
        //console.log(currentTime, clickFromTime);
        var t=(currentTime-clickFromTime)/1000;
        var newX=ballPosition.x+vx*t;
        var newY=ballPosition.y-vy*t+1/2*(GRAVITY)*(Math.pow(t,2));
        if(ballPosition.y>=800){
            newY=800;
            newX=ballPosition.x;
        }
    }
    // var newBallPosition={
    //     x:newX,
    //     y:newY
    // }
    //console.log(newBallPosition);
   // return newBallPosition;
    //console.log(newX,newY);
    return [newX,newY];
}


var thisIsRunned=false;
function main(){
    requestAnimationFrame(main);
    // here add functions for vx vy which depends on drag and angle
    if(thisIsRunned==false){
        vx=1;
        vy=3;
    }
    
    if(clicked==false){
        var angle=angleBetween(initial,final);
        var distancePulled=distanceBetween(initial,final)/SCALINGFACTOR;
        // console.log(distancePulled);
        // console.log('once');
        // console.log((180/Math.PI)*angle);
        // console.log('done');
        vx=distancePulled*Math.cos(angle);
        vy=distancePulled*Math.sin(angle)*5;
        thisIsRunned=true;
        console.log(vx,vy);
    }
    //     console.log("done");
        
    // }
    // else{
    //    console.log("not pressed");
    //     vx=0;
    //     vy=0;
    // }
    var [xnew,ynew] = update(lastLocation,vx,vy);
    //console.log(lastLocation);
    lastLocation.x=xnew;
    lastLocation.y=ynew;
   // console.log(lastLocation);
    draw(lastLocation,BALLRADIUS);
   // console.log("done");
    // console.log(lastLocation);
    // var newLocation;

    // lastLocation = newLocation;
    // console.log(lastLocation)
    
    
}

function startgame(){
    
    draw(lastLocation,BALLRADIUS);
    main();
 }
startgame();
//draw(200,200,20);

