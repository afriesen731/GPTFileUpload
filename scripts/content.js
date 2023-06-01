console.log("fuck");
let form;
let formParent;
let textBox;
let targetElement;
let sideBar;


// let fileForm = document.createElement("form");
// fileForm.classList = "fullSize";

let fileInput = document.createElement("input");
fileInput.type = "file";
fileInput.classList = "input";
fileInput.id = "fileInput";
fileInput.name = "fileInput";

body = document.body;

body.appendChild(fileInput);

console.log(fileInput.type);

// async function buildForm(){};






// async function buildForm() {
    
  
//   // targetElement.appendChild(fileForm);

//   document.appendChild(fileInput);

//   // runs first time

// }

// // async function sidebarStart() {
// //   await waitForLoad('div.scrollbar-trigger.relative.h-full.w-full.flex-1.items-start', 1000);
// //   sideBar = document.querySelector('div.scrollbar-trigger.relative.h-full.w-full.flex-1.items-start');
// //   console.log(sideBar.tagName)
// //   sideBar.addEventListener('onclick', function(e) {
// //     targetElement = document.querySelector('div.absolute.bottom-0.left-0.w-full.border-t.md\\:border-t-0.dark\\:border-white\\/20.md\\:border-transparent.md\\:dark\\:border-transparent.md\\:bg-vert-light-gradient.bg-white.dark\\:bg-gray-800.md\\:\\!bg-transparent.dark\\:md\\:bg-vert-dark-gradient.pt-2');
// //     let stillExists = Array.from(targetElement.childNodes).includes(fileInput);
// //     console.log(Array.from(targetElement.childNodes));
// //     if (stillExists) {
// //       console.log('not null');
      
// //     } else {
// //       console.log('null');
// //       fileInput.remove();
// //       buildForm();
// //     }
// //   });
    
// // }

// // const observer = new MutationObserver((mutationsList) => {
// //     // Handle the mutations here
// //     fileInput = document.querySelector('div.absolute.bottom-0.left-0.w-full.border-t.md\\:border-t-0.dark\\:border-white\\/20.md\\:border-transparent.md\\:dark\\:border-transparent.md\\:bg-vert-light-gradient.bg-white.dark\\:bg-gray-800.md\\:\\!bg-transparent.dark\\:md\\:bg-vert-dark-gradient.pt-2')
// //     let stillExists = Array.from(targetElement.childNodes).includes(fileInput);
// //     console.log(Array.from(targetElement.childNodes))
// //     if (stillExists) {
// //       console.log('not null')
      
// //     } else {
// //       console.log('null')
// //       fileInput.remove()
// //       buildForm();
// //     }
    
// //     // Additional code to handle the changes
// // });

// buildForm();
// sidebarStart()

// window.addEventListener('locationchange', function () {
//     textBox = waitForLoad("prompt-textarea", 100);
//     form = textBox.parentElement.parentElement.parentElement;
//     formParent = form.parentElement;







//     formParent.appendChild(fileForm);
//     fileForm.appendChild(fileInput);
// });






// async function waitForLoad(qSelector, timeout) {
//     element = document.querySelector(qSelector);
//     let counter = 0;
//     while (!element) {
//         counter++
//         element = document.querySelector(qSelector);
//         await setTimeout(timeout);
//     }

//     console.log(element.tagName);

//     return element;
    


// }






// async function reloadOnUrlChange(timeout) {
    
//     while (1) {
//         let url = window.location.href;
//         await setTimeout(timeout);
//         let newUrl = window.location.href;
//     }

//     textBox = waitForLoad("prompt-textarea", 100);

//     form = textBox.parentElement.parentElement.parentElement;
//     formParent = form.parentElement;

//     formParent.appendChild(fileForm);
//     fileForm.appendChild(fileInput);
// }



// while(1) {
//     reloadOnUrlChange(1000);
// }
// document.addEventListener("popstate", (e) => {
//     console.log("popstate");
// });

// document.addEventListener("onload", (e) => {
//     buildForm()
// });





fileInput.addEventListener('change', function(e) {
    let selectedFile = e.target.files[0];
    console.log(selectedFile);
});














