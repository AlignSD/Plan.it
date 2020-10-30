 $(document).ready(function () {

// var now = moment();
// var currentMonth = moment()
// const startWeek = moment().startOf('month').week();
// const endWeek = moment().endOf('month').week();


// let calendar = []
// for(var week = startWeek; week<endWeek;week++){
//   calendar.push({
//     week:week,
//     days:Array(7).fill(0).map((n, i) => moment().week(week).startOf('week').clone().add(n + i, 'day'))
//   })
// }

// document.getElementsByClassName("container");





// // need to construct header with current date displayed.
// $("#currentDay").html(moment());
// var $now = moment();
// $("#currentDay").text($now);
// var $div = $("<div>", {id: "foo", "class": "a"});
// $div.click(function(){ /* ... */ });

// need to create timeblocks for days of the month

// change blocks color for past present and future

// target.Onclick each timeblock and allow user to input an event

// store data when user clicks save


// when the page refreshes the calendar stays filled out
// localStorage.setItem("data",JSON.stringify(data));
// var data= JSON.parse(localStorage.getItem("data"));

var timeSlotArray =$(".time-slot");
for (let i = 9; i < timeSlotArray.length + 9; i++) {
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
