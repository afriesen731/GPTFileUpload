
// Create a FileReader object to read files
const reader = new FileReader();

// Function to create and append the file input element
function createFileInput() {
  // Create a file input element
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.classList = "input";
  fileInput.id = "fileInput";
  fileInput.name = "fileInput";

  // Append the file input to the document body
  document.body.appendChild(fileInput);



  // Event listener for when a file is selected
  fileInput.addEventListener('change', function(e) {
    let selectedFile = e.target.files[0];

    // Event handler for when the file is loaded
    reader.onload = function(e) {
      let fileContent = e.target.result.trim();

      let textInput = document.getElementById("prompt-textarea");


      // show overflow on text input
      let textInputStyles = textInput.getAttribute("style").split(";");
      textInputStyles.forEach((element, index) => {
        textInputStyles[index] = element.trim();
      });
      let overflowOffIndex = textInputStyles.indexOf("overflow-y: hidden");
      console.log(textInputStyles);
      if (overflowOffIndex !== -1) {
        textInputStyles.splice(overflowOffIndex);
        textInput.setAttribute("style", textInputStyles.join(';'));
      }


      


      let submitButton = document.querySelector(".right-2");

      // Enable the submit button if it is disabled
      let isDisabled = submitButton.hasAttribute("disabled");
      if (isDisabled) {
        submitButton.removeAttribute('disabled');
      }

      // Set the background color of the submit button
      submitButton.setAttribute("style", "background-color: rgb(25, 195, 125);");

      // Append the file content to the text input
      textInput.value += fileContent;

      // Set focus to the text input
      textInput.focus();



      // Clear the value of the file input
      fileInput.value = '';

  
    };

    // Event handler for file reading errors
    reader.onerror = function(e) {
      console.error("Error reading file:", e.target.error);
      let textInput = document.getElementById("prompt-textarea");
      textInput.value += e.target.error;
    };

    // Read the selected file as text
    reader.readAsText(selectedFile);
  });
}

// Call the function to create and append the file input element
createFileInput();





