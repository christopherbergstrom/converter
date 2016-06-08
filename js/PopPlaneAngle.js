var PopPlaneAngle = function(){};
PopPlaneAngle.prototype.pop = function()
{
  for (var i = 0; i < 2; i++)
  {
    var option = document.createElement("option");
    option.innerHTML="Degree";
    if (i === 0)
      leftSelect.add(option);
    else if (i === 1)
      rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Gradian";
    if (i === 0)
      leftSelect.add(option);
    else if (i === 1)
      rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Milliradian";
    if (i === 0)
      leftSelect.add(option);
    else if (i === 1)
      rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Minute of arc";
    if (i === 0)
      leftSelect.add(option);
    else if (i === 1)
      rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Radian";
    if (i === 0)
      leftSelect.add(option);
    else if (i === 1)
      rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Second of arc";
    if (i === 0)
      leftSelect.add(option);
    else if (i === 1)
      rightSelect.add(option);
  }
}
