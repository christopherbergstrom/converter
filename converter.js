var topic;
var body;
var container;
var leftDiv;
var leftSelect;
var rightDiv;
var rightSelect;

// var areaLength = ;
// var areaLength = ;
// var areaLength = ;
// var areaLength = ;
// var areaLength = ;
// var areaLength = ;
// var areaLength = ;
// var areaLength = ;
// var areaLength = ;
// var areaLength = ;
// var areaLength = ;
// var areaLength = ;
// var areaLength = ;
// var areaLength = ;


window.onload = function()
{
  body = document.querySelector("body");
  container = document.getElementById("container");
  topic = document.getElementById("topic");
  leftDiv = document.getElementById("leftDiv");
  leftSelect = document.getElementById("leftSelect");
  rightDiv = document.getElementById("rightDiv");
  rightSelect = document.getElementById("rightSelect");
  popArea();
  // topic.setAttribute("onchange", "change()");
  // topic.onchange=change;
  // topic.addEventListener("change", change);
  // populateSelect();
}
function change()
{
  if (topic.value === "Area")
    popArea();
  else if (topic.value === "Data Transfer Rate")
    popDTR();
  else if (topic.value === "Digital Storage")
    popDigitalStorage();
  else if (topic.value === "Energy")
    popEnergy();
  else if (topic.value === "Frequency")
    popFrequency();
  else if (topic.value === "Fuel Economy")
    popFuelEconomy();
  else if (topic.value === "Length")
    popLength();
  else if (topic.value === "Mass")
    popMass();
  else if (topic.value === "Plane Angle")
    popPlaneAngle();
  else if (topic.value === "Pressure")
    popPressure();
  else if (topic.value === "Speed")
    popSpeed();
  else if (topic.value === "Temperature")
    popTemp();
  else if (topic.value === "Time")
    popTime();
  else if (topic.value === "Volume")
    popVolume();
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
function popArea()
{
  removeOptions();
  for (var i = 0; i < 2; i++)
  {
    var option = document.createElement("option");
    option.innerHTML="Square kilometer";
    if (i === 0)
      leftSelect.add(option);
    if (i === 1)
      rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Square meter";
    if (i === 0)
      leftSelect.add(option);
    if (i === 1)
      rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Square mile";
    if (i === 0)
      leftSelect.add(option);
    if (i === 1)
      rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Square yard";
    if (i === 0)
      leftSelect.add(option);
    if (i === 1)
      rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Square foot";
    if (i === 0)
      leftSelect.add(option);
    if (i === 1)
      rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Square inch";
    if (i === 0)
      leftSelect.add(option);
    if (i === 1)
      rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Hectare";
    if (i === 0)
      leftSelect.add(option);
    if (i === 1)
      rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Acre";
    if (i === 0)
      leftSelect.add(option);
    if (i === 1)
      rightSelect.add(option);
  }
}
function popDTR()
{
  console.log("popDTR");
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
  console.log("popTemp");
}
function popTime()
{
  console.log("popTime");
}
function popVolume()
{
  console.log("popVolume");
}
