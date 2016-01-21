function checkAccel() {
  if (window.DeviceMotionEvent == undefined) {
    //No accelerometer is present. Use buttons. 
    alert("no accelerometer");
  } else {
    alert("accelerometer found");
    window.addEventListener("devicemotion", accelerometerUpdate, true);
  }
}
function accelerometerUpdate(e) {
   var aX = event.accelerationIncludingGravity.x*1;
   var aY = event.accelerationIncludingGravity.y*1;
   var aZ = event.accelerationIncludingGravity.z*1;
   //The following two lines are just to calculate a
   // tilt. Not really needed. 
   xPos = Math.atan2(aY, aZ);
   yPos = Math.atan2(aX, aZ);
   console.log(xPos)
   console.log(yPos)
}
