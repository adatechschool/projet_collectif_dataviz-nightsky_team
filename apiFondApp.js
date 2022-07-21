
<<<<<<< HEAD
const img = document.getElementById('img'); 
const countryImage = [] ; 
=======
/* function searchBackground(){
>>>>>>> e21e7dcba01b315361a7fd2509678f34a7e0b496
const apiKey = "dDVqjeRu2vBiQub8q4Ec5_qg79wZN7Ti4qL-rBNMs8c";
const apiUrl = "https://api.unsplash.com/photos/?client_id="+apiKey; //?query=landscape&country searched


// request to the API 

   fetch(apiUrl)

   .then(res => res.json()) 
   .then((data) => {
      console.log(img)
      //img.src = data[1].urls.regular
      let body = document.getElementsByTagName('body')
      document.body.style.backgroundImage = 'url("data[1].urls.regular")';
   }) //  ici pour envoyer vers html  
    //query parameter ?"country"&landscape
   
 
    



