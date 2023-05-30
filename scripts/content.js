const textArea = document.getElementById("prompt-textarea");
console.log("", textArea.value);
textArea.placeholder = "fuck";

const fileForm = document.createElement("form");
fileForm.class = "fullSize";


const fileInput = document.createElement("input");
fileInput.type = "file";
fileInput.class = "fullSize";

while (textArea.firstChild) {
    fileInput.appendChild(textArea.firstChild);
}
textArea.appendChild(fileForm);
fileForm.appendChild(fileInput);

