
/* function searchBackground(){
const apiKey = "dDVqjeRu2vBiQub8q4Ec5_qg79wZN7Ti4qL-rBNMs8c";
const apiUrl = "https://api.unsplash.com/photos/?client_id="+apiKey; 

// request to the API 

   fetch(apiUrl)
   .then(reponse => reponse.json())
   .then(reponse2 => console.table(reponse2))
    
 
    
}
searchBackground()

/*.then(function(data) {
        data.results.forEach(photo => {

            let backGround = `
             <img src="${photo.urls.regular}" > 
             `;
            document.getElementById("backGround").append(results) 
        });
        */

