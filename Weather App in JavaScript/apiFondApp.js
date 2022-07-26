const img = document.getElementById('img'); 
const countryImage = [] ; 

const apiKey = "dDVqjeRu2vBiQub8q4Ec5_qg79wZN7Ti4qL-rBNMs8c";
const apiUrl = "https://api.unsplash.com/photos/?client_id="+apiKey+"&query=landscape-france"; //?query=landscape&country searched


// request to the API 

fetch(apiUrl)
   .then(res => res.json()) 
   .then((data) => {
      //let body = document.getElementsByTagName('body')
      document.body.style.backgroundImage = 'url('+data[2].urls.regular+')';
   }) //  ici pour envoyer vers html  
    //query parameter ?"country"&landscape
   
 
