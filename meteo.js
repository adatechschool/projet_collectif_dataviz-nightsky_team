let ville = 'Paris';
recevoirTemperature(ville);

<<<<<<< HEAD
let button = document.querySelector('#changer');
=======
/*let button = document.querySelector('#saisieVille');
>>>>>>> 5ee4723bbc6d5f9d2002200d7cb9a89273435691
button.addEventListener('click', () => {
  ville = prompt('Choisissez une ville :');
  recevoirTemperature(ville);
});

function recevoirTemperature(ville) {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=eb3e55ca0093756f2541d5ad27c5021c&units=metric';
  
  let requete = new XMLHttpRequest();
  requete.open('GET', url);
  requete.responseType = 'json';
  requete.send();

  requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        let ville = reponse.name;
        let temperature = reponse.main.temp;
        document.querySelector('#ville').textContent = ville;
        document.querySelector('#temperature_label').textContent = temperature;
      } else {
        alert('Un problème est intervenu, merci de revenir plus tard.');
      }
    }
  }
}



