var select;
var answer;
var body;

window.onload = function()
{
  body = document.querySelector("body");
  select = document.createElement("select");
  // select.setAttribute("onchange", "change()");
  answer = document.createElement("div");
  answer.innerHTML="Apple"
  body.appendChild(select);
  body.appendChild(answer);
  populateSelect();
  select.onchange=change;
  // select.addEventListener("change", change);
  // console.log("loaded");
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
