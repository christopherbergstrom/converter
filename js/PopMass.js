var PopMass = function(){};
PopMass.prototype.pop = function()
{
  for (var i = 0; i < 2; i++)
  {
    var option = document.createElement("option");
    option.innerHTML="Metric ton";
    if (i === 0)
      leftSelect.add(option);
    else if (i === 1)
      rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Kilogram";
    if (i === 0)
      leftSelect.add(option);
    else if (i === 1)
      rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Gram";
    if (i === 0)
      leftSelect.add(option);
    else if (i === 1)
      rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Milligram";
    if (i === 0)
      leftSelect.add(option);
    else if (i === 1)
      rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Microgram";
    if (i === 0)
      leftSelect.add(option);
    else if (i === 1)
      rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Imperial ton";
    if (i === 0)
      leftSelect.add(option);
    else if (i === 1)
      rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="US ton";
    if (i === 0)
      leftSelect.add(option);
    else if (i === 1)
      rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Stone";
    if (i === 0)
      leftSelect.add(option);
    else if (i === 1)
      rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Pound";
    if (i === 0)
      leftSelect.add(option);
    else if (i === 1)
      rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Ounce";
    if (i === 0)
      leftSelect.add(option);
    else if (i === 1)
      rightSelect.add(option);
  }
}
