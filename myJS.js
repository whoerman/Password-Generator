/* getting the data from checkboxes when button clicked */

let lowerOption = document.getElementById("lowerCase")
let upperOption = document.getElementById("upperCase")
let numericOption = document.getElementById("numericCharacters")
let specialOption = document.getElementById("specialCharacters")
let copyOption = document.getElementById("copyToClipboard")


document.getElementById("submit-btn").addEventListener("click", function (event) {
    // pulling out the event object and preventing the browser from refreshing the page
    event.preventDefault();
    console.log("Lower case is " + lowerOption.checked);
    console.log("Upper case is " + upperOption.checked);
    console.log(" Numeric is " + numericOption.checked);
    console.log("Special is " + specialOption.checked);
    console.log("Copy to Clipboard is " + copyOption.checked);

    if (lowerOption.checked == true) {
        console.log("true for lower case")
    } else {
        console.log ("false for lower case")
    }
});
