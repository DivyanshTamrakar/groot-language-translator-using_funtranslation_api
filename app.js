var input_txt = document.querySelector("#input-text");
var btn = document.querySelector(".btn");
var out = document.querySelector(".output");


btn.addEventListener("click", translate);

var server_url = "https://api.funtranslations.com/translate/groot.json"
// var server_url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function Onclick(text) {

    var link = server_url + "?" + "text=" + text;
    console.log(link);
    return link;

}


function translate() {

    fetch(Onclick(input_txt.value)).then(response => response.json()).then(json => {

        console.log(json);
        out.innerText = json.contents.translated;

    }).catch(errorHandler);



}

function errorHandler(error) {
    console.log("error: " + error)
    alert("Something went wrong with the server");
}