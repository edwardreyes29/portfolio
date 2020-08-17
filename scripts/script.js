/* change background and tab colors based on tab clicked */
var color = "#353A3F";
$("#home-tab").on("click", () => {
    color = "#353A3F";
    changeColor(color);
    colorInterval();
})

$("#about-tab").on("click", () => {
    color = "#353A3F";
    changeColor(color);
    stopColorInterval()
})

$("#portfolio-tab").on("click", () => {
    color = "#353A3F";
    changeColor(color);
    stopColorInterval()
})

$("#contact-tab").on("click", () => {
    color = "#353A3F";
    changeColor(color);
    stopColorInterval()
})
var colorTime;
function colorInterval() {
    colorTime = setInterval(chooseColor, 7000);
}
colorInterval();

function stopColorInterval() {
    clearInterval(colorTime);
}

var colorCode = 1;
function chooseColor() {
    if (colorCode === 1) {
        color = "#FEC500";
        // $("home-image").attr("src",)
        colorCode++;
    } else if (colorCode === 2) {
        color = "#3A97EA";
        colorCode++;
    } else if (colorCode == 3) {
        color = "#6DA85D";
        colorCode++;
    } else if (colorCode === 4) {
        color = "#F76434";
        colorCode++;
    } else if (colorCode === 5) {
        color = "#353A3F";
        colorCode = 1;
    }
    changeColor(color);
}

function changeColor(color) {
    $("body").css("background-color", color);
    $("#home-tab").css("background-color", color);
    $("#about-tab").css("background-color", color);
    $("#portfolio-tab").css("background-color", color);
    $("#contact-tab").css("background-color", color);
}
