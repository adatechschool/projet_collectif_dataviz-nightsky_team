$(function(){
    var apikey = 'd143c443e6a33a030133989f7848c1a8';
<<<<<<< HEAD
    var baseUrl = 'https://api.openweathermap.org/data/2.5/weather?appid=' + apikey + '&lang=fr' + '&units=metric';
=======
    var baseUrl = 'https://api.openweathermap.org/data/2.5/weather?appid=' + apikey + '&units=metric';
>>>>>>> fcb5610dc36f0f88f55edb9ea7f02913769e2377
    

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
<<<<<<< HEAD
            
            //Description
            $('.description-weather').text(response.weather[0].description);

            //Temperature;
            var temp = Math.round(response.main.temp) + ' °';
            var tempMax = Math.round(response.main.temp_max) + ' °';
            var tempMin = Math.round(response.main.temp_min) + ' °';

            $('.temp-weather').text(temp);
            $('.temp-max-weather').text(tempMax);
            $('.temp-min-weather').text(tempMin);
=======

            //Temperature
            $('.temp-weather').text(response.main.temp);
            $('.temp-max-weather').text(response.main. temp_max);
            $('.temp-min-weather').text(response.main.temp_min);
>>>>>>> fcb5610dc36f0f88f55edb9ea7f02913769e2377
        })
        .fail(function(){
            console.error('Erreur');
        });
    });
}); 
