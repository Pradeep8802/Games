var can=document.querySelector("canvas");
can.width=window.innerWidth;
can.height=window.innerHeight;
var c=can.getContext("2d");

const BgX=200;
const BgY=50;
const BgX2=600;

const VELOCITYOFSPACES=1;
const GAMEHEIGHT=1000;
const THICKNESS=60;
const HEIGHTEMPTYSPACES=50;
const MINIMUMDISTANCEBETWEENSPACES=100;
var lastOneIsEmptySpace=false;
var lastOneIsEmptySpace2=false;
var block=[0];
var block2=[0];
var time=new Date().getTime();
var minDistanceBetweenBlocks=0;

function draw_bg(){
c.fillStyle="red";
c.fillRect(BgX,BgY,THICKNESS,GAMEHEIGHT);
c.fillStyle="red";
c.fillRect(BgX2,BgY,THICKNESS,GAMEHEIGHT);
}

function drawSpaces(block){
    var lenghtBlockArray=block.length;
    for(var i=0;i<lenghtBlockArray;i++){
        c.fillStyle="white";
        c.fillRect(BgX,block[i],THICKNESS,HEIGHTEMPTYSPACES);
    }
}

// if 1 is returned by callblock() create block

// function minDistance(block){
//     var len=block.lenght;
//     var lastY=block[len-1];
// if(lastY+HEIGHTEMPTYSPACES+MINIMUMDISTANCEBETWEENSPACES){
//     return 1;
// }
// return 1;
// }
// function distanceSatisfied(block){
//     var time2=new Date().getTime();
//     var len=block.lenght;
//     var lastY=block[len-1];
//     lastY>MINIMUMDISTANCEBETWEENSPACES;

// }


function callBlock(block){
    if(lastOneIsEmptySpace){
        lastOneIsEmptySpace=false;
        return 0;
    }
    else {
        var t=Math.floor(Math.random()*3)+1;
        if(t%2==0){
            lastOneIsEmptySpace=true;
            return 1;
        }
        
        else{
            lastOneIsEmptySpace=false;
            return 0;}
    }
        }

function removeCloseValue(a){a.pop();}

function addBlock(block){
    block.push(0);
    var len=block.length;
    console.log(block);
    if(len>=2 && (block[len-2]-block[len-1])<MINIMUMDISTANCEBETWEENSPACES){
        removeCloseValue(block);
    }

}
/////////////////////////////////////////

function drawSpaces2(block2){
    var lenghtBlock2Array=block2.length;
    for(var i=0;i<lenghtBlock2Array;i++){
        c.fillStyle="white";
        c.fillRect(BgX2,block2[i],THICKNESS,HEIGHTEMPTYSPACES);
    }
}

// if 1 is returned by callblock() create block

// function minDistance(block){
//     var len=block.lenght;
//     var lastY=block[len-1];
// if(lastY+HEIGHTEMPTYSPACES+MINIMUMDISTANCEBETWEENSPACES){
//     return 1;
// }
// return 1;
// }
// function distanceSatisfied(block){
//     var time2=new Date().getTime();
//     var len=block.lenght;
//     var lastY=block[len-1];
//     lastY>MINIMUMDISTANCEBETWEENSPACES;

// }


function callBlock2(block2){
    if(lastOneIsEmptySpace2){
        lastOneIsEmptySpace2=false;
        return 0;
    }
    else {
        var t=Math.floor(Math.random()*4)+1;
        if(t%2==0){
            lastOneIsEmptySpace2=true;
            return 1;
        }
        
        else{
            lastOneIsEmptySpace2=false;
            return 0;}
    }
        }

function removeCloseValue2(a){a.pop();}

function addBlock2(block2){
    block2.push(0);
    var len=block2.length;
    console.log(block2);
    if(len>=2 && (block2[len-2]-block2[len-1])<MINIMUMDISTANCEBETWEENSPACES){
        removeCloseValue2(block2);
    }

}




function update(block,block2){
    c.clearRect(0,0,can.width,can.height);
    if(callBlock(block)==1){
        addBlock(block);
    }
    var lenghtBlockArray=block.length;
    for(var i=0;i<lenghtBlockArray;i++){
        block[i]=block[i]+VELOCITYOFSPACES;
        // console.log(block[i]);
    }

    //BLOCK 2
    
    if(callBlock2(block2)==1){
        addBlock2(block2);
    }
    var lenghtBlock2Array=block2.length;
    for(var i=0;i<lenghtBlock2Array;i++){
        block2[i]=block2[i]+VELOCITYOFSPACES;
        // console.log(block[i]);
    }
}


function draw(block,block2){
    draw_bg();
    drawSpaces(block);
    drawSpaces2(block2);
    }

function main(){
    requestAnimationFrame(main);
    update(block,block2);
    draw(block,block2);
    console.log(block,block2);
}
main();

// var can=document.querySelector("canvas");
// can.width=window.innerWidth;
// can.height=window.innerHeight;
// var c=can.getContext("2d");

// const BgX=200;
// const BgY=50;

// const VELOCITYOFSPACES=3;
// const GAMEHEIGHT=1000;
// const THICKNESS=60;
// const HEIGHTEMPTYSPACES=20;
// const MINIMUMDISTANCEBETWEENSPACES=20;
// var lastOneIsEmptySpace=false;
// var block=[0];
// var time=new Date().getTime();
// var minDistanceBetweenBlocks=0;

// function draw_bg(){
// c.fillStyle="white";
// c.fillRect(BgX,BgY,THICKNESS,GAMEHEIGHT);
// }

// function drawSpaces(block){
//     var lenghtBlockArray=block.length;
//     for(var i=0;i<lenghtBlockArray;i++){
//         c.fillStyle="red";
//         c.fillRect(200,block[i],THICKNESS,HEIGHTEMPTYSPACES);
//     }
// }

// function draw(block){
//     draw_bg();
//     drawSpaces(block);
//     }
// // if 1 is returned by callblock() create block

// // function minDistance(block){
// //     var len=block.lenght;
// //     var lastY=block[len-1];
// // if(lastY+HEIGHTEMPTYSPACES+MINIMUMDISTANCEBETWEENSPACES){
// //     return 1;
// // }
// // return 1;
// // }
// // function distanceSatisfied(block){
// //     var time2=new Date().getTime();
// //     var len=block.lenght;
// //     var lastY=block[len-1];
// //     lastY>MINIMUMDISTANCEBETWEENSPACES;

// // }


// function callBlock(block){
//     if(lastOneIsEmptySpace){
//         lastOneIsEmptySpace=false;
//         return 0;
//     }
//     else {
//         var t=Math.floor(Math.random()*3)+1;
//         if(t%2==0){

//             lastOneIsEmptySpace=true;
//             return 1;
//         }
        
//         else{
//             lastOneIsEmptySpace=false;
//             return 0;}
//     }
//         }

// function removeCloseValue(a){a.pop();}

// function addBlock(){
//     block.push(0);
//     // var len=block.length;
//     // if(len>=2 && block[len-1]-block[len-2]<MINIMUMDISTANCEBETWEENSPACES){
//     //     removeCloseValue(block);
//     // }

// }



// function update(block){
//     c.clearRect(0,0,can.width,can.height);
//     if(callBlock(block)==1){
//         addBlock(block);
//     }
//     var lenghtBlockArray=block.length;
//     for(var i=0;i<lenghtBlockArray;i++){
//         block[i]=block[i]+VELOCITYOFSPACES;
//     }
// }

// function main(){
//     requestAnimationFrame(main);
//     update(block);
//     draw(block);
//     console.log(block);
// }
// main();