
function searchBackground(){
const countryImage = [] ; 
const apiKey = "dDVqjeRu2vBiQub8q4Ec5_qg79wZN7Ti4qL-rBNMs8c";
const apiUrl = "https://api.unsplash.com/photos/?client_id="+apiKey

// request to the API 

   fetch(apiUrl)

   .then(response => response.json())
   .then(response2 => console.table(response2))
   
    console.log(response.json())
}
    

   searchBackground()
