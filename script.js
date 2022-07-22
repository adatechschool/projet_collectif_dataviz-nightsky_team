// Openweathermap API.
//const api = 'd143c443e6a33a030133989f7848c1a8'; // la clé sur openweathermap.org

var callBackGetSuccess = function(data) {
    console.log("donnees api", data)
    //alert("Meteo temp  : "  + data.main.temp);
    var element = document.getElementById("meteo");
    element.innerHTML = "La temperatur du jour : +" + data.main.temp;
}


function buttonClickGET() {
    var queryLoc = document.getElementById("queryLoc").value;

    var url = "https://api.openweathermap.org/data/2.5/weather?q="+queryLoc+"&appid=d143c443e6a33a030133989f7848c1a8&units=metric"

    $.get(url, callBackGetSuccess).done(function() {
        //alert( "second success" );
      })
      .fail(function() {
        alert( "error" );
      })
      .always(function() {
        //alert( "finished" );
      });
}