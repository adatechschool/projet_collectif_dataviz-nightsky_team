$(function(){
    var apikey = 'd143c443e6a33a030133989f7848c1a8';
    var baseUrl = 'https://api.openweathermap.org/data/2.5/weather?appid=' + apikey + '&units=metric';
    

    $('#weather button').click(function(e){
        e.preventDefault(); // bloquer la rechargement de la page 
        
        var cityValue = $('#city').val();
        
        var  params = { 
            url: baseUrl +'&q=' + cityValue,
            method: 'GET'
        };
        $.ajax(params).done(function(response){
            console.log(response);
            //title
            $('.card-title').text(response.name);

            //Temperature
            $('.temp-weather').text(response.main.temp);
            $('.temp-max-weather').text(response.main. temp_max);
            $('.temp-min-weather').text(response.main.temp_min);
        })
        .fail(function(){
            console.error('Erreur');
        });
    });
}); 
