/* setting up the character arrays */
let lowerCaseArray = ["a", "b", "c", "d", "e"];
let upperCaseArray = ["A", "B", "C", "D", "E"];
let numericArray = ["1", "2", "3", "4", "5"];
let specialArray = ["~", "!", "#", "*", "<"];
let sampleArray = [];
let passwordInitiator = 0;
let currentPWitem = ""
let PWFinal =""

console.log("password intitator before click is " + passwordInitiator);

/* getting passwrod length from range slider 
will do a place holder value of 20 until i figure it out*/

let passwordNumber = 5

/* setting the data from checkboxes when button clicked */
let lowerOption = document.getElementById("lowerCase");
let upperOption = document.getElementById("upperCase");
let numericOption = document.getElementById("numericCharacters");
let specialOption = document.getElementById("specialCharacters");
let copyOption = document.getElementById("copyToClipboard");


document.getElementById("submit-btn").addEventListener("click", function (event) {
    let passwordInitiator = 1
    console.log("The password length is " + passwordNumber);
    console.log("Copy to Clipboard is " + copyOption.checked);
    console.log("password intitator after click is " + passwordInitiator);

    /* adding the selected text type arrays together*/
    if (passwordInitiator = 1) {
        if (lowerOption.checked == true) {
            sampleArray = sampleArray.concat(lowerCaseArray);
        
        console.log("Lower case is " + lowerOption.checked + " so add it");
        console.log(sampleArray)
        }
        if (upperOption.checked == true) {
            sampleArray = sampleArray.concat(upperCaseArray);
            
        console.log("Upper case is " + upperOption.checked + " so add it");      
        console.log(sampleArray)
        }
        if (numericOption.checked == true) {
            sampleArray = sampleArray.concat(numericArray)
        
        console.log(" Numeric is " + numericOption.checked + "so add it");
        console.log(sampleArray)
        }
        if (specialOption.checked == true) {
            sampleArray = sampleArray.concat(specialArray)
        
        console.log("Special is " + specialOption.checked) + "so add it";
        console.log(sampleArray)
        }

        //genertaing the random selections from the concat array

       for (i=0; i < passwordNumber; i++) {
            currentPWitem = sampleArray [Math.floor(Math.random() * Math.floor(sampleArray.length))];

            console.log(currentPWitem);

            PWFinal = PWFinal.concat(currentPWitem);

            console.log (" inside loop password  " + PWFinal);
            
        }

        console.log (" outside loop password  " + PWFinal);

    } else {
    }
});

