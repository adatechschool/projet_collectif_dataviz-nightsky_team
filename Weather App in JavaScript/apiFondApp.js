// const wrapper = document.querySelector(".wrapper"),
// inputPart = document.querySelector(".input-part"),
// infoTxt = inputPart.querySelector(".info-txt"),
// inputField = inputPart.querySelector("input"),
// locationBtn = inputPart.querySelector("button"),



place = document.getElementById('place'); 
let apiImage;

const apiKey = "dDVqjeRu2vBiQub8q4Ec5_qg79wZN7Ti4qL-rBNMs8c";
//const apiUrl = "https://api.unsplash.com/photos/?client_id="+apiKey+"&query=landscape-"+place; //?query=landscape&country searched


/*inputField.addEventListener("keyup", e =>{
   // if user pressed enter btn and input value is not empty
   if(e.key == "Enter" && inputField.value != ""){
       requestApi(inputField.value);
   }
});*/

function requestApi_apifondapp(city){
   //apiImage = "https://api.unsplash.com/photos/?client_id="+apiKey+"&pages=1&query="+city
   apiImage = "https://pixabay.com/api/?key=28862687-b3081f078d5c4866578f6cfde&q=architecture+"+city+"&image_type=photo";
   fetchData_apifondapp();
}


function fetchData_apifondapp(){
   //fetch(api).then(res => res.json()).then(result => weatherDetails(result)).catch(() =>{
  //     infoTxt.innerText = "Oups! Un problème est survenu.";
  //     infoTxt.classList.replace("pending", "error");
  //  })
   fetch(apiImage)
   .then(res => res.json()) 
   .then((data) => { document.body.style.backgroundImage = 'url('+data.hits[0].largeImageURL+')';//data[1].urls.regular+')';
   console.log(data)})
   //.catch(()=>{document.body.style.backgroundImage = //ajouter image fixe });
}




   
 
