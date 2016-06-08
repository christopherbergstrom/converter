var popArea = new PopArea();
var popDTR = new PopDTR();
var popDigitalStorage = new PopDigitalStorage();
var popEnergy = new PopEnergy();
var popFrequency = new PopFrequency();
var popFuelEconomy = new PopFuelEconomy();
var popLength = new PopLength();
var popMass = new PopMass();
var popPlaneAngle = new PopPlaneAngle();
var popPressure = new PopPressure();
var popSpeed = new PopSpeed();
var popTemp = new PopTemp();
var popTime = new PopTime();
var popVolume = new PopVolume();
// var temp = new Temp();
var topic;
var body;
var container;
var leftDiv;
var leftSelect;
var rightDiv;
var rightSelect;

window.onload = function()
{
  body = document.querySelector("body");
  container = document.getElementById("container");
  topic = document.getElementById("topic");
  leftDiv = document.getElementById("leftDiv");
  leftSelect = document.getElementById("leftSelect");
  rightDiv = document.getElementById("rightDiv");
  rightSelect = document.getElementById("rightSelect");
  popArea.pop();
  // topic.setAttribute("onchange", "change()");
  // topic.onchange=change;
  // topic.addEventListener("change", change);
  // populateSelect();
}
function changeTopic()
{
  if (topic.value === "Area")
  {
    removeOptions();
    popArea.pop();
  }
  else if (topic.value === "Data Transfer Rate")
  {
    removeOptions();
    popDTR.pop();
  }
  else if (topic.value === "Digital Storage")
  {
    removeOptions();
    popDigitalStorage.pop();
  }
  else if (topic.value === "Energy")
  {
    removeOptions();
    popEnergy.pop();
  }
  else if (topic.value === "Frequency")
  {
    removeOptions();
    popFrequency.pop();
  }
  else if (topic.value === "Fuel Economy")
  {
    removeOptions();
    popFuelEconomy.pop();
  }
  else if (topic.value === "Length")
  {
    removeOptions();
    popLength.pop();
  }
  else if (topic.value === "Mass")
  {
    removeOptions();
    popMass.pop();
  }
  else if (topic.value === "Plane Angle")
  {
    removeOptions();
    popPlaneAngle.pop();
  }
  else if (topic.value === "Pressure")
  {
    removeOptions();
    popPressure.pop();
  }
  else if (topic.value === "Speed")
  {
    removeOptions();
    popSpeed.pop();
  }
  else if (topic.value === "Temperature")
  {
    removeOptions();
    popTemp.pop();
  }
  else if (topic.value === "Time")
  {
    removeOptions();
    popTime.pop();
  }
  else if (topic.value === "Volume")
  {
    removeOptions();
    popVolume.pop();
  }
}

function changeLeftIn()
{
  var one = leftSelect.value;
  var two = rightSelect.value;
  var num = parseFloat(leftIn.value);
  if (num === "")
  {
    num = 0;
    leftIn.value = "";
    rightIn.value = "";
  }
  if (num !== "" && !isNaN(num))
  {
    if (one === "Celcius" && two === "Fahrenheit")
      rightIn.value = temp.cToF(num);
    else if (one === "Fahrenheit" && two === "Celcius")
      rightIn.value = temp.fToC(num);
    else if (one === "Celcius" && two === "Kelvin")
      rightIn.value = temp.cToK(num);
    else if (one === "Kelvin" && two === "Celcius")
      rightIn.value = temp.kToC(num);
    else if (one === "Fahrenheit" && two === "Kelvin")
      rightIn.value = temp.fToK(num);
    else if (one === "Kelvin" && two === "Fahrenheit")
      rightIn.value = temp.kToF(num);
    else if (one === "Fahrenheit" && two === "Fahrenheit")
      rightIn.value = num;
    else if (one === "Celcius" && two === "Celcius")
      rightIn.value = num;
    else if (one === "Kelvin" && two === "Kelvin")
      rightIn.value = num;
  }
}
function changeRightIn()
{
  var one = leftSelect.value;
  var two = rightSelect.value;
  var num = parseFloat(rightIn.value);
  if (num === "")
  {
    num = 0;
    leftIn.value = "";
    rightIn.value = "";
  }
  if (num !== "" && !isNaN(num))
  {
    if (one === "Celcius" && two === "Fahrenheit")
      leftIn.value = temp.fToC(num);
    else if (one === "Fahrenheit" && two === "Celcius")
      leftIn.value = temp.cToF(num);
    else if (one === "Celcius" && two === "Kelvin")
      leftIn.value = temp.kToC(num);
    else if (one === "Kelvin" && two === "Celcius")
      leftIn.value = temp.cToK(num);
    else if (one === "Fahrenheit" && two === "Kelvin")
      leftIn.value = temp.kToF(num);
    else if (one === "Kelvin" && two === "Fahrenheit")
      leftIn.value = temp.fToK(num);
    else if (one === "Fahrenheit" && two === "Fahrenheit")
      rightIn.value = num;
    else if (one === "Celcius" && two === "Celcius")
      rightIn.value = num;
    else if (one === "Kelvin" && two === "Kelvin")
      rightIn.value = num;
  }
}
function removeOptions()
{
  while (leftSelect.firstChild)
  {
    leftSelect.removeChild(leftSelect.firstChild);
  }
  while (rightSelect.firstChild)
  {
    rightSelect.removeChild(rightSelect.firstChild);
  }
}
function popDigitalStorage()
{
  console.log("popDigitalStorage");
}
function popEnergy()
{
  console.log("popEnergy");
}
function popFrequency()
{
  console.log("popFrequency");
}
function popFuelEconomy()
{
  console.log("popFuelEconomy");
}
function popLength()
{
  console.log("popLength");
}
function popMass()
{
  console.log("popMass");
}
function popPlaneAngle()
{
  console.log("popPlaneAngle");
}
function popPressure()
{
  console.log("popPressure");
}
function popSpeed()
{
  console.log("popSpeed");
}
function popTemp()
{
  removeOptions();
  for (var i = 0; i < 2; i++)
  {
    var option = document.createElement("option");
    option.innerHTML="Celcius";
    if (i === 0)
      leftSelect.add(option);
    else if (i === 1)
      rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Fahrenheit";
    if (i === 0)
      leftSelect.add(option);
    else if (i === 1)
      rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Kelvin";
    if (i === 0)
      leftSelect.add(option);
    else if (i === 1)
      rightSelect.add(option);
  }
}
function popTime()
{
  console.log("popTime");
}
function popVolume()
{
  console.log("popVolume");
}
