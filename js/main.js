var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elResultSuccess = document.querySelector(".result-success");
var elResultWarning = document.querySelector(".result-warning");
var elResultDanger = document.querySelector(".result-error");
var elWalker = document.querySelector(".travel__length-walker");
var elBicycle = document.querySelector(".travel__length-bicycle");
var elCar = document.querySelector(".travel__length-car");
var elPlane = document.querySelector(".travel__length-plane");
var elList = document.querySelector(".travel__list");

var walkerSpead = 3.6;
var bicycleSpead = 20.1;
var carSpead = 70;
var planeSpead = 800;
var elInputVal;


function walker(value) {
  var walkerTime = value / walkerSpead;
  var walkerHours = Math.floor(walkerTime);
  var walkersMinut = Math.floor((walkerTime - walkerHours) * 60);
  var walkersTotal = walkerHours + " hour " + walkersMinut + " minuts";
  return walkersTotal;
}

function bicycle(value) {
  var bicycleTime = value / bicycleSpead;
  var bicycleHours = Math.floor(bicycleTime);
  var bicycleMinut = Math.floor((bicycleTime - bicycleHours) * 60);
  var bicycleTotal = bicycleHours + " hour " + bicycleMinut + " minuts";
  return bicycleTotal;
}

function car(value) {
  var carTime = value / carSpead;
  var carHours = Math.floor(carTime);
  var carMinut = Math.floor((carTime - carHours) * 60);
  var carTotal = carHours + " hour " + carMinut + " minuts";
  return carTotal;
}

function plane(value) {
  var planeTime = value / planeSpead;
  var planeHours = Math.floor(planeTime);
  var planeMinut = Math.floor((planeTime - planeHours) * 60);
  var planeTotal = planeHours + " hour " + planeMinut + " minuts";
  return planeTotal;
}


elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();


  elInputVal = elInput.value;

  if (isNaN(elInputVal)) {
    return (elResultDanger.style.display = "block");
  } else if (elInputVal <= 0) {
    return (elResultWarning.style.display = "block");
  } else {
    elWalker.textContent = walker(elInputVal);
    elBicycle.textContent = bicycle(elInputVal);
    elCar.textContent = car(elInputVal);
    elPlane.textContent = plane(elInputVal);
    return (elResultSuccess.style.display = "block");
    
  }

  
});
