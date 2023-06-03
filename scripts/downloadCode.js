const loadWait = 1000; // Wait time in milliseconds

const csv =`Language,Extension
python,.py
javascript,.js
java,.java
cpp,.cpp
csharp,.cs
ruby,.rb
go,.go
swift,.swift
php,.php
rust,.rs
kotlin,.kt
typescript,.ts
perl,.pl
bash,.sh
r,.R
matlab,.m
lua,.lua
scala,.scala
dart,.dart
julia,.jl
groovy,.groovy
crystal,.cr
powershell,.ps1
objective,.m
haxe,.hx
elixir,.exs
erlang,.erl`; // CSV data for language extensions

const fileExtentionDict = csvToDict(csv); // Convert CSV data to a dictionary

// Event listener for click events
document.addEventListener("click", function(e) {
  let parent = e.target;

  // Check if the clicked element is inside a <pre> element
  while (parent) {
    if (parent.tagName == "PRE") {

      let buttonExists = parent.querySelector(".download-code");


      if (!buttonExists) {
        createButton(parent); // Create a download button for the code block
      }
    }

    parent = parent.parentElement;

  }
});



// Convert CSV data to a dictionary
function csvToDict(csv) {
  const lines = csv.split('\n');
  const dict = {};

  for (let i = 1; i < lines.length; i++) {
    let currentLine = lines[i].split(',');
    dict[currentLine[0]] = currentLine[1];
  }

  return dict;
}




// Extract text content from a code element
function extractText(codeElement) {
  const jQueryCodeElement = $(codeElement);
  const code = jQueryCodeElement.text();
  return code;
}

// Get the file extension for a given fileType
function getDocExtention(fileType) {
  return fileExtentionDict[fileType] || "txt";
}

// Download the code as a file
function downloadFile(button) {
  const buttonParent = button.parentElement;

  const fileType = buttonParent.querySelector("span").innerHTML;
  const extention = getDocExtention(fileType);

  const codeElement = buttonParent.parentElement.querySelector("code");
  let code = extractText(codeElement);


  const filename = `${fileType}${extention}`;

  const blob = new Blob([code], { type: 'text/plain' });


  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;


  link.click();
  URL.revokeObjectURL(link.href);
}




// Create a download button for a <pre> element
function createButton(preElement) {
  let codeHeading = preElement.firstElementChild.firstElementChild;
  let downLoadButtonExists = codeHeading.querySelector(".download-code");


  if (!downLoadButtonExists) {

    const downLoadButton = document.createElement("button");
    downLoadButton.classList = "download-code";
    downLoadButton.innerHTML = "download";

    codeHeading.appendChild(downLoadButton);

    downLoadButton.addEventListener("click", function() {
      downloadFile(downLoadButton);
    });
  }
}
