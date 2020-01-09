/* setting up the character arrays */
let lowerCaseArray = ["a","b","c","d","e"];
let upperCaseArray = ["A","B","C","D","E"];
let numericArray = ["1","2","3","4","5"];
let specialArray = ["~","!","#","*"];
let sampleArry = [];

/* getting passwrod length from range slider */

let passwordNumber = document.getElementById("passwordLength")
let passwordSizeNum = document.getElementById("passwordLength")
console.log(passwordNumber)
console.log(passwordSizeNum)

/* getting the data from checkboxes when button clicked */
let lowerOption = document.getElementById("lowerCase");
let upperOption = document.getElementById("upperCase");
let numericOption = document.getElementById("numericCharacters");
let specialOption = document.getElementById("specialCharacters");
let copyOption = document.getElementById("copyToClipboard");


document.getElementById("submit-btn").addEventListener("click", function (event) {
    // pulling out the event object and preventing the browser from refreshing the page
    event.preventDefault();
    console.log("The password length is" + passwordNumber);
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
