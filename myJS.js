//setting up the character arrays 
let lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numericArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let specialArray = ["~", "@", "#", "*", "<"];
let sampleArray = [];
let PWFinal =""

// setting the data from  checkboxes for when button clicked 
let lowerOption = document.getElementById("lowerCase");
let upperOption = document.getElementById("upperCase");
let numericOption = document.getElementById("numericCharacters");
let specialOption = document.getElementById("specialCharacters");

//adding the event listener and running the password generation
document.getElementById("generate-btn").addEventListener("click", function (event) {

    //resetting the password in case they are reclicking the button another time
    let PWFinal ="";

    //getting the length from the range slider
    let rangeInput = document.getElementById("passwordLength").value;

    //just to show that the password length is set
    console.log("The password length is " + rangeInput);

        //make sure they checked a box (an actual useful use of an alert!)
        if (lowerOption.checked == false && upperOption.checked == false && numericOption.checked == false &&
            specialOption.checked == false) {
            alert("I can't make something out of nothing! You must choose at least one text type...");
            return;
        }

        //add lower case letters to sampling array if selected
        if (lowerOption.checked == true) {
            sampleArray = sampleArray.concat(lowerCaseArray);

            //just to show the adding of the lower case array to the sampling array
            console.log("Lower case is " + lowerOption.checked + " so add it");
            console.log(sampleArray)
        }

        //add upper case letters to sampling array if selected
        if (upperOption.checked == true) {
            sampleArray = sampleArray.concat(upperCaseArray);

            //just to show the adding of the upper case array to the sampling array
            console.log("Upper case is " + upperOption.checked + " so add it");
            console.log(sampleArray)
        }

        //add numeric characters to sampling array if selected
        if (numericOption.checked == true) {
            sampleArray = sampleArray.concat(numericArray)

            //just to show the adding of the numeric array to the sampling array
            console.log(`Numeric is ${numericOption.checked} so add it to master array`);
            console.log(sampleArray)
        }

        //add special characters to sampling array if selected
        if (specialOption.checked == true) {
            sampleArray = sampleArray.concat(specialArray)

            //just to show the adding of the special array to the sampling array
            console.log("Special is " + specialOption.checked) + "so add it";
            console.log(sampleArray)
        }

        //generataing the random selections from the sampling array

        for (i = 0; i < rangeInput; i++) {
            currentPWitem = sampleArray[Math.floor(Math.random() * Math.floor(sampleArray.length))];

            //just to show that a random letter has been selected
            console.log(`Randamly chosen item is ${currentPWitem}`);

            //adding the selected letter to the end of the password string
            PWFinal = PWFinal.concat(currentPWitem);

            //just to show the working password array progress as each letter is added
            console.log("Add it to end of password  " + PWFinal);

        }

        //alerting it because I can't display it to the page
        console.log(`Password result: ${PWFinal}`);
        window.alert(`Your passord is ${rangeInput} characters long.
        
        Your password is 
        ${PWFinal}
        
        You can copy it by highlighting it and copying it.`);
        

});

document.getElementById("copy-btn").addEventListener("click", function (event) {
    alert("sorry, this button does not work yet")
});