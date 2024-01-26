

function copyText(encodedText) {
    var decodedText = decodeURIComponent(encodedText);

    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = decodedText;

    document.body.appendChild(tempTextarea);

    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.body.removeChild(tempTextarea);

    alert("Text copied: " + decodedText);
}