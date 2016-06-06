var select;
var answer;
var body;
var container;
var innerContainer;

window.onload = function()
{
  body = document.querySelector("body");
  container = document.getElementById("container");
  select = document.getElementById("topic");
  innerContainer = document.getElementById("innerContainer");
  // select.setAttribute("onchange", "change()");
  // select.onchange=change;
  // select.addEventListener("change", change);
  // populateSelect();
}
function populateSelect()
{
  var option = document.createElement("option");
  option.innerHTML="Apple";

  select.appendChild(option);
  var option = document.createElement("option");
  option.innerHTML="Banana";

  select.appendChild(option);
  var option = document.createElement("option");
  option.innerHTML="Cantelope";

  select.appendChild(option);
}
function change()
{
  answer.innerHTML=select.value;
}
