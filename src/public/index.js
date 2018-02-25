//constants
const HERO_MAX = 12;
const HERO_ID = "hero";
const HERODOT_ID = "heroDot";
const HERO_TIMEOUT = 15000; // Change image every 15 seconds

var heroIndex = 1;
setInterval(carousel, HERO_TIMEOUT); 

function carousel() {

    if (document.readyState === "complete") {
        plusDivs(1);
    }
}

function plusDivs(i) {

    var result = heroIndex + i;
    if (result > HERO_MAX) { result = 1; }
    if (result < 1) { result = HERO_MAX; }
    currentDiv(result);
}

function currentDiv(i) {

    $("#" + HERO_ID.toString() + heroIndex.toString()).fadeOut(1000);
//    $("#" + HERODOT_ID.toString() + heroIndex.toString()).removeClass("w3-white");
    heroIndex = i;
    $("#" + HERO_ID.toString() + heroIndex.toString()).fadeIn(1000);
//    $("#" + HERODOT_ID.toString() + heroIndex.toString()).addClass("w3-white");
}