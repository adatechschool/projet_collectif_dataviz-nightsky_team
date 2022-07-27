const wrapper = document.querySelector(".wrapper"),
inputPart = document.querySelector(".input-part"),
infoTxt = inputPart.querySelector(".info-txt"),
inputField = inputPart.querySelector("input"),
locationBtn = inputPart.querySelector("button"),
weatherPart = wrapper.querySelector(".weather-part"),
wIcon = weatherPart.querySelector("img"),
arrowBack = wrapper.querySelector("header i");

let api;

    inputField.addEventListener("keyup", e =>{
      // if user pressed enter btn and input value is not empty
      if(e.key == "Enter" && inputField.value != ""){
          requestApi_scriptnew(inputField.value);
          requestApi_apifondapp(inputField.value);
          console.log("ici3")
      }
    });