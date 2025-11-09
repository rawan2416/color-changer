var redbutton=document.getElementById("redBtn");
var bluebutton=document.getElementById("blueBtn");
var greenbutton=document.getElementById("greenBtn");
var resetbutton=document.getElementById("resetBtn");
redbutton.addEventListener("click",function () {
    document.body.style.backgroundColor="red";
});
bluebutton.addEventListener("click",function () {
    document.body.style.backgroundColor="blue";
});
greenbutton.addEventListener("click",function () {
    document.body.style.backgroundColor="green";
});
resetbutton.addEventListener("click",function () {
    document.body.style.backgroundColor="white";
});