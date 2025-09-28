/*
    plans:
        add a toggle switch in the top right to turn it on/off
*/

document.getElementById("billiam-activate").addEventListener("click",Billiam())

//main program function
function Billiam() {
    let element = document.querySelectorAll("p, h1, h2, h3"); //get all elements to change 
    for (var i = element.length; i--;) { //for each element
        element[i].textContent = FindandReplace(element[i].textContent) //replace the words
    }
}

//<span> and <a> could also be included but seem to break if they are represented by img rather than text, not sure how to exclude them if they are just an img 

//function that takes a string and replaces all the first letters with B, returns the new string
function FindandReplace(input) {

    let str = input.split(' '); //split the string into individual words
    let tempword = ""; //tempval for putting the new "B" word in
    let tempstring = ""; //create a new empty string for putting all the new "B" words in

    for (let word of str) { //loop through each word in the string

        if (isNaN(word)) { //if word is not a number

            if (["a","e","i","o","u"].includes(word[0].toLowerCase())) { //if the first letter is a vowel

                if (word[0].toUpperCase() == word[0]) { //if letter was capitial 
                    tempword = "B" + word.toLowerCase(); //add a B to the start of the word and make the first letter lowercase
                } else { //else lowercase
                tempword = "b" + word; //add a b to the start of the word
                }

            } else if (["ch","kn","ph","qu","sh","st","th","wh"].includes(word.substring(0,2).toLowerCase())) { //else if first 2 letters are a digraph or other 2 letter combo sound

                if (word[0].toUpperCase() == word[0]) {
                    tempword = "B" + word.substring(2,word.length); //replace first 2 letters of word with B
                } else {
                    tempword = "b" + word.substring(2,word.length); //replace first 2 letters of word with b
                }

            } else { //else just replace first letter

                if (word[0].toUpperCase() == word[0]) {
                    tempword = "B" + word.substring(1,word.length); //replace first letter with B
                } else {
                    tempword = "b" + word.substring(1,word.length); //replace first letter with b
                }
                
            }

            tempstring = tempstring + tempword + " " //add word and a space after it to the total string
        }
    }

    return tempstring; //return the changed string

}