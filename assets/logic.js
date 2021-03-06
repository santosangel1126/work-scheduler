var workHours = [
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  
]
var hourEl = document.querySelectorAll(".hour");
var rowEl = document.querySelector(".row");
var eventEl = document.querySelectorAll("textarea");
var colHour = document.querySelectorAll('.col');
var dateEl = document.querySelectorAll('currentDay');
var dateEl = document.querySelectorAll(".saveBtn");

// setup day, date & year display
var nowDay = moment().format("dddd, MMM Do YY");
dateEl.textContent = nowDay

// setup time for daily schedule
var currentTime = moment().format('h');

// function to display the correct time in each slot
function outputHours() {
  // loops through each element selected in hoursEl
  for (var i = 0; i < hourEl.length; i++) {
    if (i < workHours.length) {
      //used parseInt to convert each time from string to a integer
      var hourDisplay = parseInt(workHours[i]);
      var amPm = "AM";
      if (hourDisplay > 12) {
        hourDisplay = hourDisplay - 12;
      }
    }

    hourEl[i].textContent = hourDisplay + amPm;

    if (parseInt(workHours[i]) > parseInt(currentTime)) {
      eventEl[i].setAttribute("class", "future");
    } else if (parseInt(workHours[i]) === currentTime) {
      eventEl[i].setAttribute("class", "present");
    } else eventEl[1].setAttribute("class", "past");
  }
}
outputHours();

//function to save each event to local storage
function saveEvent() {
  if (eventEl[0].value !== "") {
    localStorage.setItem("8", eventEl[0].value);
  }
  if (eventEl[1].value !== "") {
    localStorage.setItem("9", eventEl[1].value);
  }
  if (eventEl[2].value !== "") {
    localStorage.setItem("10", eventEl[2].value);
  }
  if (eventEl[3].value !== "") {
    localStorage.setItem("11", eventEl[3].value);
  }
  if (eventEl[4].value !== "") {
    localStorage.setItem("12", eventEl[4].value);
  }
  if (eventEl[5].value !== "") {
    localStorage.setItem("13", eventEl[5].value);
  }
  if (eventEl[6].value !== "") {
    localStorage.setItem("14", eventEl[6].value);
  }
  if (eventEl[7].value !== "") {
    localStorage.setItem("15", eventEl[7].value);
  }
  if (eventEl[8].value !== "") {
    localStorage.setItem("16", eventEl[8].value);
  }
  if (eventEl[9].value !== "") {
    localStorage.setItem("17", eventEl[9].value);
  }
}
//create function to reload save entries from local storage
function reloadLastsave() {
    // using getItem to retrieve from local storage 
    lastSaved = localStorage.getItem('8 Am');
    eventEl[0].value = lastSaved
    lastSaved = localStorage.getItem('9 Am');
    ventEl[1].value = lastSaved
    lastSaved = localStorage.getItem('10 Am');
    ventEl[2].value = lastSaved
    lastSaved = localStorage.getItem('11 Am');
    ventEl[3].value = lastSaved
    lastSaved = localStorage.getItem('12 Pm');
    ventEl[4].value = lastSaved
    lastSaved = localStorage.getItem('1 Pm');
    ventEl[5].value = lastSaved
    lastSaved = localStorage.getItem('2 Pm');
    ventEl[6].value = lastSaved
    lastSaved = localStorage.getItem('3 Pm');
    ventEl[7].value = lastSaved
    lastSaved = localStorage.getItem('4 Pm');
    ventEl[8].value = lastSaved
    lastSaved = localStorage.getItem('5 Pm');
    ventEl[9].value = lastSaved
}

// call function to retrieve event on planner after refresh 
reloadLastsave();

// create var for save btn 
var btnEl = document.querySelectorAll('.saveBtn');
// add eventlistener to save the events into local storage 
btnEl.forEach(function(event){
    event.addEventListener('click',saveEvent)
});
