place = document.getElementById('place'); 

 inputField.addEventListener("keyup", e =>{
    // if user pressed enter btn and input value is not empty
    if(e.key == "Enter" && inputField.value != ""){
        requestApi_apifondapp(inputField.value);
    }
 });

 function requestApi_apifondapp(city){
    apiImage = "https://pixabay.com/api/?key=28862687-b3081f078d5c4866578f6cfde&q=architecture+"+city+"&image_type=photo";
    fetchData_apifondapp();
 };

 function fetchData_apifondapp(){
    fetch(apiImage)
    .then(res => res.json()) 
    .then((data) => { document.body.style.backgroundImage = 'url('+data.hits[0].largeImageURL+')';//data[1].urls.regular+')';
    console.log(data)})
 };



 
