
// Create a file input element
let fileInput = document.createElement("input");
fileInput.type = "file";
fileInput.classList = "input";
fileInput.id = "fileInput";
fileInput.name = "fileInput";

body = document.body;
body.appendChild(fileInput);

console.log(fileInput.type);

// Create a FileReader object to read files
const reader = new FileReader();

// Event listener for when a file is selected
fileInput.addEventListener('change', function(e) {
  let selectedFile = e.target.files[0];

  // Event handler for when the file is loaded
  reader.onload = function(e) {
    let fileContent = e.target.result.trim();

    let textInput = document.getElementById("prompt-textarea");
    let button = document.querySelector(".right-2");

    // Enable the button if it is disabled
    let isDisabled = button.hasAttribute("disabled");
    if (isDisabled) {
      button.removeAttribute('disabled');
    }

    // Set the background color of the button
    button.setAttribute("style", "background-color: rgb(25, 195, 125);");

    // Append the file content to the text input
    textInput.value += fileContent;

    // Set focus to the text input
    textInput.focus();

    // Clear the value of the file input
    fileInput.value = '';

    console.log(textInput);
  };

  // Read the selected file as text
  reader.readAsText(selectedFile);
});















