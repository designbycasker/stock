/*HTML Include*/
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}
// ---------------------------------------------------------------------------------------------------


// 캔버스 05 - 210208 - transform

const canvas05 = document.querySelector('.canvas_05');
const context05 = canvas05.getContext('2d');

context05.font = '60px Apple SD Gothic NEO';
context05.textAlign = 'center';
context05.fillText('Transform', 800, 600);

context05.fillRect(100, 100, 400, 400);
context05.fillStyle = 'tomato';
context05.fillRect(200, 200, 400, 400);


// ---------------------------------------------------------------------------------------------------


// 캔버스 04 - 210205
const canvas04 = document.querySelector('.canvas_04');
const context04 = canvas04.getContext('2d');
const control = document.querySelector('.control');
let drawMode = false;
let colorVal = 'black';

function downHandler() {
    drawMode = true;
}
function upHandler() {
    drawMode = false;
}

function setColor(e) {
    // console.log(e.target.getAttribute('data-color'));
    colorVal = e.target.getAttribute('data-color');
    context04.fillStyle = colorVal;
}

function moveHandler(e) {
    if (!drawMode) return;

    // console.log(e.layerY);
    context04.beginPath();
    context04.arc(e.layerX * 1, e.layerY * 1, 4, 0, Math.PI * 2, true);
    context04.fill();
}

canvas04.addEventListener('mousemove', moveHandler);
canvas04.addEventListener('mousedown', downHandler);
canvas04.addEventListener('mouseup', upHandler);
control.addEventListener('click', setColor);


// ---------------------------------------------------------------------------------------------------


// 캔버스 03 - 210205
const canvas03 = document.querySelector('.canvas_03');
const context03 = canvas03.getContext('2d');

const imgElem = new Image();
// imgElem.src = '../img/issue-1.jpg';
imgElem.src = 'https://designbycasker.github.io/stock/img/issue-1.jpg';
imgElem.addEventListener('load', () => {
    context03.drawImage(imgElem, 50, 50);
})


// ---------------------------------------------------------------------------------------------------


// 캔버스 02 - 210205
const canvas02 = document.querySelector('.canvas_02');
const context02 = canvas02.getContext('2d');

let xPos = 80;
let count = 0;

function draw() {
    if (count % 10 === 0) {
        context02.clearRect(0, 0, 1600, canvas02.height);
        context02.beginPath();
        context02.arc(xPos, 580, 40, 0, Math.PI * 2, false);
        context02.fill();
        xPos += 32;
    }

    // 애니메이션 멈춤 01
    // if (xPos >= canvas02.width - 20) {
    //     return;
    // }

    count++;
    timerId = requestAnimationFrame(draw);
    // setInterval(draw, 500);

    // 애니메이션 멈춤 02
    if (xPos >= canvas02.width - 20) {
        cancelAnimationFrame(timerId);
    }

}
draw();

//클릭 시 멈춤
canvas02.addEventListener('click', () => {
    cancelAnimationFrame(timerId);
})


// ---------------------------------------------------------------------------------------------------


// 캔버스 01 - 210204
function 라디안(각도) {
    return 각도 * Math.PI / 180;
}

const canvas01 = document.querySelector('.myCanvas');
const ctx01 = canvas01.getContext('2d');

// 스크린을 위한 배경 생성
ctx01.fillStyle = '#3a3a3a';
ctx01.globalCompositeOperation = 'multiply';
ctx01.fillRect(0, 0, canvas01.width, canvas01.height);

// 원
ctx01.beginPath();
ctx01.fillStyle = '#43FF50';
ctx01.globalCompositeOperation = 'screen';
ctx01.arc(760, 525, 80, 0, 라디안(360), false);
ctx01.fill();
ctx01.closePath();

ctx01.beginPath();
ctx01.fillStyle = '#2C78FF';
ctx01.globalCompositeOperation = 'screen';
ctx01.arc(720, 596, 80, 0, 라디안(360), false);
ctx01.fill();
ctx01.closePath();

ctx01.beginPath();
ctx01.fillStyle = '#FF4343';
ctx01.globalCompositeOperation = 'screen';
ctx01.arc(800, 596, 80, 0, 라디안(360), false);
ctx01.fill();
ctx01.closePath();

// 삼각형
ctx01.fillStyle = 'white';
ctx01.beginPath();
ctx01.moveTo(607, 474);
ctx01.lineTo(617, 514);
ctx01.lineTo(588, 507);
ctx01.lineTo(607, 474);
// ctx01.stroke();
ctx01.fill();
ctx01.closePath(); //굳이 안해줘도 됨, 밑에서 새로 시작하므로

// 사각형
// ctx01.beginPath();
// ctx01.strokeRect(10, 10, 100, 100);
// ctx01.stroke();


// 캔버스 01 - 210204
// function 라디안(각도) {
//     return 각도 * Math.PI / 180;
// }

// const gogo = document.querySelector('.myCanvas');
// const txt = gogo.getContext('2d');

// // 사각형
// txt.fillStyle = 'blue';
// txt.globalCompositeOperation = 'multiply';
// txt.fillRect(10, 10, 100, 100);
// txt.fillStyle = '#ff0000';
// txt.fillRect(200, 120, 200, 100);

// // 삼각형
// txt.fillStyle = 'aqua';
// txt.beginPath();
// txt.moveTo(300, 300);
// txt.lineTo(400, 420);
// txt.lineTo(200, 320);
// txt.lineTo(300, 300);
// txt.stroke();
// txt.fill();
// txt.closePath(); //굳이 안해줘도 됨, 밑에서 새로 시작하므로

// // 원
// txt.beginPath();
// txt.fillStyle = 'tomato';
// txt.arc(100, 500, 50, 0, 라디안(360), false);
// txt.fill();
// txt.closePath();