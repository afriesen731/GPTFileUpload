const loadWait = 1000;
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
erlang,.erl`
const fileExtentionDict = csvToDict(csv)





document.addEventListener("click", function(e) {
    let clickedElement = e.target;


    let inCodeElement = false;

    let parent = e.target;

    while (parent) {
        if (parent.tagName == "PRE") {


            let buttonExists = parent.querySelector(".download-code");
            if (!buttonExists) {

                createButton(parent);

            }

        }
        parent = parent.parentElement;
    }



    


});


function csvToDict(csv) {
    const lines = csv.split('\n');
    // const headers = lines[0].split(',');
    const dict = {};
  
    for (let i = 1; i < lines.length; i++) {
        let currentLine = lines[i].split(',');
      
  
      
        dict[currentLine[0]] = currentLine[1];
      
    }
  
    return dict;
}



function extractText(codeElement) {
    const jQueryCodeElement = $(codeElement);
    const code = jQueryCodeElement.text();
    return code;
}


async function checkLoading() {
    let loadDots = document.querySelector(".text-2xl");

    if (loadDots) {
        return true;
    } 
    else {
        return false;
    }
}


function getDocExtention(fileType) {
    return fileExtentionDict[fileType] || "txt";
}


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
  
    // Programmatically trigger a click event on the link to initiate the file download
    link.click();
  
    // Clean up the URL object
    URL.revokeObjectURL(link.href);


    
}

function createButton(preElement) {

    let codeHeading = preElement.firstElementChild.firstElementChild;
    let downLoadButtonExists = codeHeading.querySelector(".download-code");
    if (!downLoadButtonExists) {

        const downLoadButton = document.createElement("button");
        
        downLoadButton.classList = "download-code"
        downLoadButton.innerHTML = "download"
        codeHeading.appendChild(downLoadButton);



        downLoadButton.addEventListener("click", function() {
            downloadFile(downLoadButton);
        });
          
    }

}


  