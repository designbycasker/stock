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


// 캔버스 06 - 210210 - video & woot animation

const canvas_woot = document.querySelector('.canvas_woot');
const ctx_woot = canvas_woot.getContext('2d');

ctx_woot.fillStyle = "#3a3a3a";
ctx_woot.fillRect(0, 0, 1600, 1200);

ctx_woot.fillStyle = "#F3D9BA";
ctx_woot.font = '40px Spoqa Han Sans Neo';
ctx_woot.textAlign = 'center';
ctx_woot.fillText('비디오 로딩 중', 800, 600);

const videoElem = document.querySelector('.video_woot');
videoElem.addEventListener('canplaythrough', render);

function render() {
    ctx_woot.drawImage(videoElem, -267, 0, 2133.33, 1200);
    requestAnimationFrame(render);
}


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
    if (count % 2 === 0) {
        context02.clearRect(0, 0, 1600, canvas02.height);
        context02.beginPath();
        context02.arc(xPos, 580, 40, 0, Math.PI * 2, false);
        context02.stroke();
        // context02.fill();
        xPos += 40;
    }

    count++;
    timerId = requestAnimationFrame(draw);
    // setInterval(draw, 500);

    // 애니메이션 멈춤 02
    if (xPos >= canvas02.width - 80) {
        cancelAnimationFrame(timerId); // or return;
        drawReverse();
    }
}

function drawReverse() {
    if (count % 2 === 0) {
        context02.clearRect(0, 0, 1600, canvas02.height);
        context02.beginPath();
        context02.arc(xPos, 580, 40, 0, Math.PI * 2, false);
        context02.stroke();
        // context02.fill();
        xPos -= 40;
    }
    count++;
    timerId = requestAnimationFrame(drawReverse);

    if (xPos <= 80) {
        cancelAnimationFrame(timerId);
        draw();
    }
}

context02.strokeStyle = '#ffffff';
context02.lineWidth = 2;
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

const canvas01 = document.querySelector('.canvas_01');
const ctx01 = canvas01.getContext('2d');

// 스크린을 위한 배경 생성
ctx01.fillStyle = '#3a3a3a';
ctx01.globalCompositeOperation = 'multiply';
ctx01.fillRect(0, 0, canvas01.width, canvas01.height);

// 원
ctx01.beginPath();
ctx01.fillStyle = '#43FF50';
ctx01.globalCompositeOperation = 'screen';
ctx01.arc(800, 540, 120, 0, 라디안(360), false);
ctx01.fill();
ctx01.closePath();

ctx01.beginPath();
ctx01.fillStyle = '#2C78FF';
ctx01.globalCompositeOperation = 'screen';
ctx01.arc(740, 660, 120, 0, 라디안(360), false);
ctx01.fill();
ctx01.closePath();

ctx01.beginPath();
ctx01.fillStyle = '#FF4343';
ctx01.globalCompositeOperation = 'screen';
ctx01.arc(860, 660, 120, 0, 라디안(360), false);
ctx01.fill();
ctx01.closePath();

// 삼각형
ctx01.strokeStyle = 'white';
ctx01.beginPath();
ctx01.moveTo(516, 467);
ctx01.lineTo(529, 494);
ctx01.lineTo(500, 487);
ctx01.lineTo(516, 467);
ctx01.lineWidth = 2;
ctx01.stroke();
// ctx01.closePath(); //굳이 안해줘도 됌, 밑에서 새로 시작하므로

// 라인
ctx01.strokeStyle = 'white';
ctx01.beginPath();
ctx01.moveTo(1068, 557);
ctx01.lineTo(1106, 524);
ctx01.lineWidth = 2;
ctx01.stroke();

//사각형
ctx01.strokeStyle = 'white';
ctx01.translate(945, 840);
ctx01.rotate(라디안(15));
ctx01.translate(-945, -840);
ctx01.strokeRect(945, 840, 28, 28);