let apiTemps;

inputField.addEventListener("keyup", e =>{
    // if user pressed enter btn and input value is not empty
    if(e.key == "Enter" && inputField.value != ""){
        requestApiTemps(inputField.value);
    }
 });

 function requestApiTemps(city){
    apiTemps = "https://api.ipgeolocation.io/timezone?apiKey=699fa2b6ba5b47a081276aceda9e404b&location="+city;
    fetchData_apiTemps();
 };

 function fetchData_apiTemps(){
    fetch(apiTemps)
    .then(res => res.json()) 
    .then((data) => {
        console.log(data)
        const localhour = data.time_24
        const localDay= dateFormat(data.date,'dd MM yyyy')
        //const frLocalDay = localDay.toLocalDateString(undefined)
        const timeZo = data.timezone

        document.querySelector(".time").innerText = localhour;
        document.querySelector(".date").innerText = localDay;
        document.querySelector(".time-zone").innerText = timeZo; 

   })
 };

 const week = ["Lundi", "Mardi", "Mercredi","Jeudi","Vendredi","Samedi","Dimanche"]
 const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

 //function to change date

    function dateFormat(inputDate, format) {                                              
    //parse the input date
    const date = new Date(inputDate);

    //extract the parts of the date
    const day = date.getDate();
    const dayWeek = week[date.getDay()];
    const month = months[date.getMonth()];
    const year = date.getFullYear();    

    //replace the month
    format = format.replace("MM", month.toString().padStart(2,"0"));        

    //replace the year
    if (format.indexOf("yyyy") > -1) {
        format = format.replace("yyyy", year.toString());
    } else if (format.indexOf("yy") > -1) {
        format = format.replace("yy", year.toString().substr(2,2));
    }
    //replace the day
    format = dayWeek + " " + format.replace("dd", day.toString().padStart(2,"0"));

    return format;
}


//console.log('Converted date: '+ dateFormat('2021-12-10', 'MM-dd-yyyy'));