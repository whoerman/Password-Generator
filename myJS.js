/* setting up the character arrays */
let lowerCaseArray = ["a", "b", "c", "d", "e","f", "g", "h", "i", "j","k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];
let upperCaseArray = ["A", "B", "C", "D", "E","F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numericArray = ["1", "2", "3", "4", "5","6", "7", "8", "9", "0"];
let specialArray = ["~", "!", "#", "*", "<"];
let sampleArray = [];
let passwordInitiator = 0;
let currentPWitem = ""
let PWFinal =""

/* setting the data from checkboxes when button clicked */
let lowerOption = document.getElementById("lowerCase");
let upperOption = document.getElementById("upperCase");
let numericOption = document.getElementById("numericCharacters");
let specialOption = document.getElementById("specialCharacters");
let copyOption = document.getElementById("copyToClipboard");


document.getElementById("submit-btn").addEventListener("click", function (event) {

    //used to start process - probably another way to do it
    let passwordInitiator = 1

    //get password length from range slider

    let rangeInput = document.getElementById("passwordLength").value;
    let passwordNumber = rangeInput

    console.log("The password length is " + passwordNumber);

    // building the master array from subsets selected
    
    if (passwordInitiator > 0) {

        //make sure they checked a box

        if (lowerOption.checked == false && upperOption.checked == false && numericOption.checked == false &&
                specialOption.checked == false) {
                    document.write(`You chose nothing, so you get nothing! refresh the page and try again...`)
                    return;
                }
        //add lower case letters to array if selected
        if (lowerOption.checked == true) {
            sampleArray = sampleArray.concat(lowerCaseArray);
        
        console.log("Lower case is " + lowerOption.checked + " so add it");
        console.log(sampleArray)
        }

        //add upper case letters to array if selected
        if (upperOption.checked == true) {
            sampleArray = sampleArray.concat(upperCaseArray);
            
        console.log("Upper case is " + upperOption.checked + " so add it");      
        console.log(sampleArray)
        }

        //add numeric characters to array if selected
        if (numericOption.checked == true) {
            sampleArray = sampleArray.concat(numericArray)
        
        console.log(`Numeric is ${numericOption.checked} so add it to master array`);
        console.log(sampleArray)
        }

        //add special characters to array if selected
        if (specialOption.checked == true) {
            sampleArray = sampleArray.concat(specialArray)
        
        console.log("Special is " + specialOption.checked) + "so add it";
        console.log(sampleArray)
        }

//genertaing the random selections from the master array

       for (i=0; i < passwordNumber; i++) {
            currentPWitem = sampleArray [Math.floor(Math.random() * Math.floor(sampleArray.length))];

            console.log(`randamly chosen item is ${currentPWitem}`);

            //adding the selected letter to the end of the password string
            PWFinal = PWFinal.concat(currentPWitem);

            console.log ("add it to end of password  " + PWFinal);
            
        }

        console.log (`Password result: ${PWFinal}`);

        document.write(`Your password is ${passwordNumber} characters long. This is your password ${PWFinal}`)

        /*copy password to clipboard*/

        
        console.log("Copy to Clipboard is " + copyOption.checked);

        /*var copyText = document.querySelector(PWFinal);
            copyText.select();
            document.execCommand("copy");

            not currently working*/

    } else {
    }
});

