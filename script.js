"use strict"

// var canv = document.querySelector('canvas');
// var context = canv.getContext('2d');

// // context.fillStyle = 'green';
// // context.fillRect(50 , 50 , 280 , 280);

// // context.lineWidth = '2';
// // context.strokeStyle = 'blue';
// // context.strokeRect(150 , 90 , 170 , 250 );

// // context.moveTo(0 , 0);
// // context.lineTo(700 , 700);
// // context.stroke();

// // context.moveTo(700 , 0);
// // context.lineTo(0 , 700);
// // context.stroke();


// // context.font = '25px arial';
// // context.fillStyle = 'red';
// // context.fillText("Canvas" , 150 , 200);



// // context.moveTo(150 , 100);
// // context.lineTo(150 , 10);
// // context.stroke();

// // context.moveTo(150 , 100);
// // context.lineTo(150 , 10);
// // context.stroke();
// // context.moveTo(150 , 100);
// // context.lineTo(150 , 10);
// // context.stroke();


// // context.fillStyle = 'green';
// // context.beginPath();
// // context.fillSvtyle = 'green';
// // context.arc(350 , 300 , 280 , 0 , 2*Math.PI);
// // context.stroke();   
// // context.closePath();



// // context.strokeStyle = 'black';
// // context.beginPath();
// // context.arc(250 , 180 , 25  , 0 , 2*Math.PI);
// // context.stroke();


// // context.beginPath();
// // context.arc(450 , 180 , 25  , 0 , 2*Math.PI);
// // context.stroke();


// // context.beginPath();
// // context.arc(350 , 350 , 150  , 0 , 1*Math.PI);
// // context.stroke();



// // var obj = {
// //     x:100 ,
// //     y:100 ,
// //     height: 150 , 
// //     width: 200 ,
// //     fillStyle: 'red',
    
    
// // }
// // function rect() {
// //     context.fillStyle = obj.fillStyle;
// //     context.fillRect(obj.x , obj.y, obj.height , obj.width);
// // }
// // rect()

// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// // ----------------------------------------------

// var range = document.getElementById('range-line');

// var rangeinput = document.getElementById('range-input');

// var colorPicker = document.getElementById('color-change');


// colorPicker.addEventListener("change" , event => {
//     ctx.strokeStyle() = change.target.value;
// })

// rangeinput.addEventListener("input" , event => {
//     range = input.target.value;
// })

// let  obj = {
//     x:0 ,
//     y:0 ,
// }

// document.addEventListener('mousedown', start);
// document.addEventListener('mouseup', stop);
// window.addEventListener('resize', resize);
// resize();

// function resize() {
//     ctx.canvas.height = window.innerHeight;
//     ctx.canvas.width = window.innerWidth;
// }

// // canvasi elementi vra mkniki slaqi jamanak kordinat stanal

// function reposition(event) {
//     obj.x = event.clientX - canvas.offsetLeft;
//     obj.y = event.clientY - canvas.offsetTop;
// }

// function start(event) {
//     document.addEventListener('mousemove' , draw);
//     reposition(event);
// }

// function stop() {
//     document.removeEventListener('mousemove' , draw);
// }

// function draw() {
//     ctx.beginPath();
//     ctx.lineWidth = '5';
//     ctx.strokeStyle = colorPicker;
//     ctx.moveTo(obj.x , obj.y );
//     reposition(event);
//     ctx.lineTo(obj.x , obj.y);
//     ctx.stroke();
// }

// ---------------------------------- animation -----------------------------------------

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');



let obj = {
    x:20 , 
    y:20 ,
    width: 80 ,
    height: 80
}

function draw() {
    clear()
    ctx.fillRect(obj.x , obj.y , obj.width , obj.height);

    
}

function clear(){
    ctx.clearRect(0 , 0 , canvas.width , canvas.height);
}

var xcoord = 5

var ycoord = 5

function rect() {
    requestAnimationFrame(rect);
    update();
    draw();
    // obj.x += 5;
    obj.x += xcoord;
    obj.y += ycoord;

    
    
}

rect()

function update() {
    
    if (obj.x + obj.width > canvas.width) {
        xcoord = -5;
    }else if (obj.x < 0 ) {
        xcoord = 5;
    }

    if (obj.y + obj.height > canvas.height) {
        ycoord = -5;
    }else if (obj.y < 0 ) {
        ycoord = 5;
    }
}
