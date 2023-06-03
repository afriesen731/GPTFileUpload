
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


// Extract text content from a code element
function extractText(codeElement) {
  const jQueryCodeElement = $(codeElement);
  const code = jQueryCodeElement.text();
  return code;
}

// Get the file extension for a given fileType
function getExtension(fileType) {
  fileExtensionDict = {
    python: '.py',
    javascript: '.js',
    java: '.java',
    cpp: '.cpp',
    csharp: '.cs',
    ruby: '.rb',
    go: '.go',
    swift: '.swift',
    php: '.php',
    rust: '.rs',
    kotlin: '.kt',
    typescript: '.ts',
    perl: '.pl',
    bash: '.sh',
    r: '.R',
    matlab: '.m',
    lua: '.lua',
    scala: '.scala',
    dart: '.dart',
    julia: '.jl',
    groovy: '.groovy',
    crystal: '.cr',
    powershell: '.ps1',
    objective: '.m',
    haxe: '.hx',
    elixir: '.exs',
    erlang: '.erl'
  }
  
  return fileExtensionDict[fileType] || "txt";
}

// Download the code as a file
function downloadFile(button) {
  const buttonParent = button.parentElement;
  const fileType = buttonParent.querySelector("span").innerHTML;
  const extension = getExtension(fileType);
  const codeElement = buttonParent.parentElement.querySelector("code");
  let code = extractText(codeElement);
  const filename = `${fileType}${extension}`;
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
  let downloadButtonExists = codeHeading.querySelector(".download-code");

  if (!downloadButtonExists) {
    const downloadButton = document.createElement("button");
    downloadButton.classList = "download-code";
    downloadButton.innerHTML = "download";
    codeHeading.appendChild(downloadButton);

    downloadButton.addEventListener("click", function() {
      downloadFile(downloadButton);
    });
  }
}
