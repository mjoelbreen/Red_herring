/*This app is designed to perform automated queries of random strings on Google,
Facebook and Amazon.

Google searches via URL: "https://www.google.com/search?q=" + search words spaced by "+".

Facebook searches via URL: "https://www.facebook.com/search/top?q=" + search words spaced by
"&20", ended with "&epa=SEARCH_BOX".

Amazon searches via URL: "https://www.amazon.com/s?k=" + search words spaced by "+",
ended with "&ref=nb_sb_noss".
*/

const queryButton = document.getElementById("query-button");
const stopButton = document.getElementById("stop-button");
let goneFishin = false;

queryButton.onclick = function()  {
    let wordLength = Math.floor(Math.random() * 10);
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for ( var i = 0; i < wordLength; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    };
    goneFishin = true;
    queryButton.innerHTML = "Gone Fishin'";
    stopButton.style.visibility = "visible";
    window.open("https://www.google.com/search?q=" + result);
    window.open("https://www.facebook.com/search/top?q=" + result + "&epa=SEARCH_BOX");
    window.open("https://www.amazon.com/s?k=" + result + "&ref=nb_sb_noss");
    window.onload = function () {
        while (goneFishin == true) {
            window.location.assign("https://www.google.com/search?q=" + result);
        }
    }
}


    
 
 
stopButton.onclick = function () {
    goneFishin = false;
    queryButton.innerHTML = "Go Fish!";
    stopButton.style.visibility = "hidden";
}













