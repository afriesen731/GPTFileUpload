console.log("fuck");
let form;
let formParent;
let textBox;
let targetElement;
let sideBar;


let fileInput = document.createElement("input");
fileInput.type = "file";
fileInput.classList = "input";
fileInput.id = "fileInput";
fileInput.name = "fileInput";

body = document.body;

body.appendChild(fileInput);

console.log(fileInput.type);




const reader = new FileReader();

fileInput.addEventListener('change', function(e) {
  let selectedFile = e.target.files[0];



  reader.onload = function(e) {
    let fileContent = e.target.result.trim();

    
   
    let textInput = document.getElementById("prompt-textarea");
 
    let button = document.querySelector(".right-2");

    console.log(button.type)
    let isDisabled = button.hasAttribute("disabled");
    if (isDisabled) {
      button.removeAttribute('disabled');
    }

    button.setAttribute("style", "background-color: rgb(25, 195, 125);")


    textInput.value += fileContent;
    textInput.focus();

    fileInput.value = '';

    console.log(textInput);
  };

  reader.readAsText(selectedFile);
  



});














