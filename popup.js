const queryButton = document.getElementById("query-button");

queryButton.onclick = function () {
    const length = Math.floor(Math.random() * 10);
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    };
    console.log("https://www.google.com/search?q=" + result);
    return window.open("https://www.google.com/search?q=" + result);
}







