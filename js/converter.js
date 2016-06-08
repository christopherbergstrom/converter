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
var area = new Area();
var dtr = new DTR();
var digitalStorage = new DigitalStorage();
var energy = new Energy();
var frequency = new Frequency();
var fuelEconomy = new FuelEconomy();
var length = new Length();
var mass = new Mass();
var planeAngle = new PlaneAngle();
var pressure = new Pressure();
var speed = new Speed();
var temp = new Temp();
var time = new Time();
var volume = new Volume();
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
  if (num === "" || isNaN(num))
  {
    // console.log("1: "+num);
    num = 0;
    leftIn.value = "";
    rightIn.value = "";
  }
  else if (num !== "" && !isNaN(num))
  {
    // console.log("2: "+num);
    area.left(one, two, num);
    // dtr.left(one, two, num);
    // digitalStorage.left(one, two, num);
    // energy.left(one, two, num);
    // frequency.left(one, two, num);
    // fuelEconomy.left(one, two, num);
    // length.left(one, two, num);
    // mass.left(one, two, num);
    // planeAngle.left(one, two, num);
    // pressure.left(one, two, num);
    // speed.left(one, two, num);
    temp.left(one, two, num);
    // time.left(one, two, num);
    // volume.left(one, two, num);
  }
}
function changeRightIn()
{
  var one = leftSelect.value;
  var two = rightSelect.value;
  var num = parseFloat(rightIn.value);
  if (num === "" || isNaN(num))
  {
    // console.log("1: "+num);
    num = 0;
    leftIn.value = "";
    rightIn.value = "";
  }
  else if (num !== "" && !isNaN(num))
  {
    // console.log("2: "+num);
    area.right(one, two, num);
    // dtr.right(one, two, num);
    // digitalStorage.right(one, two, num);
    // energy.right(one, two, num);
    // frequency.right(one, two, num);
    // fuelEconomy.right(one, two, num);
    // length.right(one, two, num);
    // mass.right(one, two, num);
    // planeAngle.right(one, two, num);
    // pressure.right(one, two, num);
    // speed.right(one, two, num);
    temp.right(one, two, num);
    // time.right(one, two, num);
    // volume.right(one, two, num);
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
