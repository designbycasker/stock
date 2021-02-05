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

// 캔버스 01
function 라디안(각도) {
    return 각도 * Math.PI / 180;
}

const gogo = document.querySelector('.myCanvas');
const txt = gogo.getContext('2d');

// 사각형
txt.fillStyle = 'blue';
txt.fillRect(10, 10, 100, 100);
txt.fillStyle = '#ff0000';
txt.fillRect(200, 120, 200, 100);

// 삼각형
txt.fillStyle = 'aqua';
txt.beginPath();
txt.moveTo(300, 300);
txt.lineTo(400, 420);
txt.lineTo(200, 320);
txt.lineTo(300, 300);
txt.stroke();
txt.fill();
txt.closePath(); //굳이 안해줘도 됨, 밑에서 새로 시작하므로

// 원
txt.beginPath();
txt.fillStyle = 'tomato';
txt.arc(100, 500, 50, 0, 라디안(360), false);
txt.fill();
txt.closePath();