function dayOfTheWeek() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var n = weekday[d.getDay()];
    document.getElementById("day").innerHTML = n;
    scheduleCreator(n);
}
function scheduleCreator(day) {
//Excuse the horrible code, will be put in a database soon
	var ArrMonday = [
    "7",
    "7:30",
    "8:14",
    "2",
    "8:19",
    "9:06",
    "3",
    "9:11",
    "9:58",
    "4",
    "10:03",
    "10:48",
    "5",
    "11:58",
    "12:33",
    "1",
    "12:38",
    "1:24",
    "8",
    "1:29",
    "2:15"
	];
	var ArrTuesday = [
    "6",
    "7:30",
    "8:20",
    "2",
    "8:25",
    "9:45",
    "3",
    "9:50",
    "10:40",
    "1",
    "10:45",
    "12:25",
    "5",
    "12:30",
    "1:20",
    "7",
    "1:25",
    "2:15",
	];
	var ArrWednesday = [
    "8",
    "7:30",
    "8:20",
    "3",
    "8:25",
    "9:45",
    "2",
    "9:50",
    "10:40",
    "6",
    "10:45",
    "12:25",
    "7",
    "12:30",
    "1:20",
    "4",
    "1:25",
    "2:15",
	];
	var ArrThurday = [
    "5",
    "7:30",
    "8:20",
    "8",
    "8:25",
    "9:45",
    "4",
    "9:50",
    "10:40",
    "7",
    "10:45",
    "12:25",
    "6",
    "12:30",
    "1:20",
    "1",
    "1:25",
    "2:15",
	];
	var ArrFriday = [
    "3",
    "7:30",
    "8:14",
    "2",
    "8:19",
    "9:06",
    "8",
    "9:11",
    "9:58",
    "1",
    "10:03",
    "10:48",
    "4",
    "11:58",
    "12:33",
    "5",
    "12:38",
    "1:24",
    "6",
    "1:29",
    "2:15"
	];
	if (day=="Monday") {
	 dayis = ArrMonday;
	} else if (day=="Tuesday") {
	 dayis = ArrTuesday;
	} else if (day=="Wednesday") {
	 dayis = ArrWednesday;
	} else if (day=="Thursday") {
	 dayis = ArrThursday;
	} else if (day=="Friday") {
	 dayis = ArrFriday;
	} else {
	 dayis = ArrMonday
	 document.getElementById("day").innerHTML = "Have a nice weekend! Monday's schedule below:";
	}
	for (i=0; i<dayis.length; i=i+3) {
		dayPeriod = dayis[i];
		document.getElementById(i/3).innerHTML = "Period " + dayPeriod;
	}
	for (i=1; i<dayis.length; i=i+3) {
		startPeriod = dayis[i];
		endPeriod = dayis[i+1];
		time = updateClock();

		numTime = startPeriod.replace(':','');
		intTime = parseInt(numTime);

		endnumTime = endPeriod.replace(':','');
		endintTime = parseInt(endnumTime);

		curnumTime = time.replace(':','');
		curintTime = parseInt(curnumTime);

		if (curintTime >= intTime && curintTime <= endintTime) {
			var element = document.getElementById(((i-1)/3).toString());
			element.style.fontWeight = 'bold';
			var remaining = endintTime-curintTime;
           // if (curintTime.toString().length==4 && curintTime[0]!=endintTime[0] && curintTime[1]!=endintTime[1]) {
             //   console.log("Yess")
               // var remaining = endintTime-curintTime-40;
            //} else if ()
            var remaining = endintTime-curintTime;
            if (remaining > 60) {
                remaining -= 40
            }
			if (remaining!=1){
				document.getElementById("timeremaining").innerHTML = remaining + " Minutes Remaining";
			} else {
				document.getElementById("timeremaining").innerHTML = remaining + " Minute Remaining";
			}
			
		}
		document.getElementById("stime" + (i-1)/3).innerHTML = startPeriod + " - " +endPeriod;
	}
	
	//day.array
}
