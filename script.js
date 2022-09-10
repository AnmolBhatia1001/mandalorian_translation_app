

var userInput = document.querySelector("#userInput");
var convertBtn = document.querySelector("button");
var outputDiv = document.querySelector("#output");
var apiURL = "https://api.funtranslations.com/translate/mandalorian.json";

convertBtn.addEventListener("click", ()=>{
    var reqURL = `${apiURL}?text=${userInput.value}`
    fetch(encodeURI(reqURL))
    .then( (response) => response.json())
    .then( (output) => outputDiv.innerText = output.contents.translated)
})

