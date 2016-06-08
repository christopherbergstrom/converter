var PopPressure = function(){};
PopPressure.prototype.pop = function()
{
  for (var i = 0; i < 2; i++)
  {
    var option = document.createElement("option");
    option.innerHTML="Atmosphere";
    if (i === 0)
      leftSelect.add(option);
    else if (i === 1)
      rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Bar";
    if (i === 0)
      leftSelect.add(option);
    else if (i === 1)
      rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Pascal";
    if (i === 0)
      leftSelect.add(option);
    else if (i === 1)
      rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Pound-force per square inch";
    if (i === 0)
      leftSelect.add(option);
    else if (i === 1)
      rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Torr";
    if (i === 0)
      leftSelect.add(option);
    else if (i === 1)
      rightSelect.add(option);
  }
}
