function getParagraph1() {
    var arrayOfTexts = [];
    var paragraphText;
    for (i = 1; i <= 6; i++) {
        arrayOfTexts.push(document.getElementById("input_" + i).value);
    }
    paragraphText=arrayOfTexts.join();
    document.getElementById("paragraph1").innerText = paragraphText;
}

function getParagraph2() {
    var arrayOfTexts = [];
    var paragraphText;
    for (i = 1; i <= 6; i++) {
        arrayOfTexts.push(document.getElementById("input_1" + i).value);
    }
    paragraphText=arrayOfTexts.join();
    document.getElementById("paragraph2").innerText = paragraphText;
}