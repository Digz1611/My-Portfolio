function copyText(text) {
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = text;

    document.body.appendChild(tempTextarea);

    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.body.removeChild(tempTextarea);

    alert("Text copied: " + text);
}

// Add event listeners to copyable elements
document.addEventListener('DOMContentLoaded', function() {
    var copyables = document.getElementsByClassName('copyable');
    
    for (var i = 0; i < copyables.length; i++) {
        copyables[i].addEventListener('click', function() {
            var textToCopy = this.textContent;
            copyText(textToCopy);
        });
    }
});