// countdown to dec 25
var timeForPost = document.getElementById('postTime');


function setTime() {
  var today = new Date();
  var day = today.getDate()
  var month = today.getMonth() + 1
  var year = today.getFullYear()
  var date = month + '-' + day + '-' + year

  timeForPost.innerHTML = date
}

setTime();
// the date for today
// the date we want (dec25)

// cal to figure out the difference in time
//display on html

//eventlistener, onchange, the change of the difference