/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string, names){

    const lowerCaseString = string.toLowerCase();
    let matchFound = false;
    for (let i = 0; i < names.length; i++) {
        if (lowerCaseString.includes(names[i].toLowerCase())) {
            console.log("Matched", names[i]);
            matchFound = true;
        }
    }
    if (!matchFound) {
        console.log("No Matches");
    }
}
findWords(dog_string, dog_names)

 

/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let Given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
   let Output_arr = []
   for (let i = 0; i < arr.length; i++) {
    if ( i % 2 == 0){
        //arr[i] = "even index"
        arr.splice(i,1, "even index")
    }
   }
   return arr
}
console.log(replaceEvens(Given_arr))


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]