

let jQueryScript = document.createElement("script");
jQueryScript.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
const head = document.head;
head.appendChild(jQueryScript);

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







window.addEventListener('load', function() {

    const form = document.querySelector(".stretch");


    createButtons()

    if (!form) {
        console.error("failed to get form");
    }

    form.addEventListener("submit", async function(e) {
        let loading = true;
        while (loading) {
            loading = await setTimeout(checkLoading(), loadWait);
        }


        createButtons();



    });
});


function csvToDict(csv) {
    const lines = csv.split('\n');
    const headers = lines[0].split(',');
    const dictArray = [];
  
    for (let i = 1; i < lines.length; i++) {
      const currentLine = lines[i].split(',');
      const dict = {};
  
      for (let j = 0; j < headers.length; j++) {
        dict[headers[j]] = currentLine[j];
      }
  
      dictArray.push(dict);
    }
  
    return dictArray;
}



function extractCode(html) {
    const codeElement = $('<div>').html(html).find('code');
    const code = codeElement.text();
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

    


    const jQueryCodeElement = $(codeElement).find('code');
    const code = jQueryCodeElement.text();
    

    


    const filename = fileType + "." + extention;

    const blob = new Blob([code], { type: 'text/plain' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
  
    // Programmatically trigger a click event on the link to initiate the file download
    link.click();
  
    // Clean up the URL object
    URL.revokeObjectURL(link.href);


    
}

function createButtons() {
    allCodeContainers = document.querySelectorAll("pre");

    allCodeContainers.forEach(element => {
        let codeHeading = element.firstElementChild.firstElementChild;
        let downLoadButtonExists = codeHeading.querySelector(".download-code");
        if (!downLoadButtonExists) {

            const downLoadButton = document.createElement("button");
            
            downLoadButton.classList = "download-code"
            codeHeading.appendChild(downLoadButton);



            downLoadButton.addEventListener("onclick", downloadFile(downLoadButton));
        }
    });
}


  