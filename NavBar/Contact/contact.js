function copyText(text) {
    // Create a temporary textarea element
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = text;

    // Append the textarea to the document
    document.body.appendChild(tempTextarea);

    // Select the text in the textarea
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999); /* For mobile devices */

    // Copy the selected text
    document.execCommand("copy");

    // Remove the temporary textarea from the document
    document.body.removeChild(tempTextarea);

    // Optionally, provide feedback to the user
    alert("Text copied: " + text);
}