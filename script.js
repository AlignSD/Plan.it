 $(document).ready(function () {


// set var for current time in military 
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
var currentHour = moment().format('H');
// $("#currentDay").append(currentHour);
// console.log(currentHour);

// vars for each hour displayed in time-blocks to hold number of the hour.
var rowHour7a = 7;
var rowHour8a = 8;
var rowHour9a = 9;
var rowHour10a = 10;
var rowHour11a = 11;
var rowHour12p = 12;
var rowHour1p = 13;
var rowHour2p = 14;
var rowHour3p = 15;
var rowHour4p = 16;
var rowHour5p = 17;
var rowHour6p = 18;
var rowHour7p = 19;
var rowHours = [7,8,9,10,11,12,13,14,15,16,17,18,19];
console.log(rowHour7p);
// for (let i = 0; i<rowHours.length; i++){

// if current hour is less than current hour apply past class to id
if (rowHour7a < currentHour) {
  $('#7').addClass('past');
  // else if the rowHour is equal to the current hour add pressent class
} else if (rowHour7a == currentHour) {
  $('#7').addClass('present');
  // else add future class because its neither less than or equal to
} else {
  $('#7').addClass('future');
}
if (rowHour8a < currentHour) {
  $('#8').addClass('past');
} else if (rowHour8a == currentHour) {
  $('#8').addClass('present');
} else {
  $('#8').addClass('future');
}
if (rowHour9a < currentHour) {
  $('#9').addClass('past');
} else if (rowHour9a == currentHour) {
  $('#9').addClass('present');
} else {
  $('#9').addClass('future');
}
if (rowHour10a < currentHour) {
  $('#10').addClass('past');
} else if (rowHour10a == currentHour) {
  $('#10').addClass('present');
} else {
  $('#10').addClass('future');
}
if (rowHour11a < currentHour) {
  $('#11').addClass('past');
} else if (rowHour11a == currentHour) {
  $('#11').addClass('present');
} else {
  $('#11').addClass('future');
}
if (rowHour12p < currentHour) {
  $('#12').addClass('past');
} else if (rowHour12p == currentHour) {
  $('#12').addClass('present');
} else {
  $('#12').addClass('future');
}
if (rowHour1p < currentHour) {
  $('#13').addClass('past');
} else if (rowHour1p == currentHour) {
  $('#13').addClass('present');
} else {
  $('#13').addClass('future');
}
if (rowHour2p < currentHour) {
  $('#14').addClass('past');
} else if (rowHour2p == currentHour) {
  $('#14').addClass('present');
} else {
  $('#14').addClass('future');
}
if (rowHour3p < currentHour) {
  $('#15').addClass('past');
} else if (rowHour3p == currentHour) {
  $('#15').addClass('present');
} else {
  $('#15').addClass('future');
}
if (rowHour4p < currentHour) {
  $('#16').addClass('past');
} else if (rowHour4p == currentHour) {
  $('#16').addClass('present');
} else {
  $('#16').addClass('future');
}
if (rowHour5p < currentHour) {
  $('#17').addClass('past');
} else if (rowHour5p == currentHour) {
  $('#17').addClass('present');
} else {
  $('#17').addClass('future');
}
if (rowHour6p < currentHour) {
  $('#18').addClass('past');
} else if (rowHour6p == currentHour) {
  $('#18').addClass('present');
} else {
  $('#18').addClass('future');
}
if (rowHour7p < currentHour) {
  $('#19').addClass('past');
} else if (rowHour7p == currentHour) {
  $('#19').addClass('present');
} else {
  $('#19').addClass('future');
}

// need to create timeblocks for days of the month

// change blocks color for past present and future

// target.Onclick each timeblock and allow user to input an event

// store data when user clicks save


// when the page refreshes the calendar stays filled out
// localStorage.setItem("data",JSON.stringify(data));
// var data= JSON.parse(localStorage.getItem("data"));

var timeSlotArray =$(".time-slot");
for (let i = 7; i < timeSlotArray.length + 7; i++) {
  // check if null
  var storedData = localStorage.getItem(`data${i}`);
  if (storedData) {

    $(`[data=${i}]`).find("textarea").val(storedData);
  }
  
}

// added event listener to all save buttons
$(".save-button").on("click", saveNotes);
function saveNotes(event){
  // get data
  var timeText = $(event.target).siblings("textarea").val();
  // get the ID too
  var id = $(event.target).closest(".time-slot").attr("data");
  // store data
  localStorage.setItem(`data${id}`, timeText);                                
}
 }) 
