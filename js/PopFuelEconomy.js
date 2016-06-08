var PopFuelEconomy = function(){};
PopFuelEconomy.prototype.pop = function()
{
  for (var i = 0; i < 2; i++)
  {
    var option = document.createElement("option");
    option.innerHTML="US Miles per gallon";
    if (i === 0)
      leftSelect.add(option);
    else if (i === 1)
      rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Miles per gallon (imperial)";
    if (i === 0)
      leftSelect.add(option);
    else if (i === 1)
      rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Kilometer per hour";
    if (i === 0)
      leftSelect.add(option);
    else if (i === 1)
      rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Liter per 100 kilometers";
    if (i === 0)
      leftSelect.add(option);
    else if (i === 1)
      rightSelect.add(option);
  }
}
