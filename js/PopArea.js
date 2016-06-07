var PopArea = function()
{
}
PopArea.prototype.pop = function()
{
  for (var i = 0; i < 2; i++)
  {
    var option = document.createElement("option");
    option.innerHTML="Square kilometer";
    if (i === 0)
    leftSelect.add(option);
    else if (i === 1)
    rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Square meter";
    if (i === 0)
    leftSelect.add(option);
    else if (i === 1)
    rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Square mile";
    if (i === 0)
    leftSelect.add(option);
    else if (i === 1)
    rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Square yard";
    if (i === 0)
    leftSelect.add(option);
    else if (i === 1)
    rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Square foot";
    if (i === 0)
    leftSelect.add(option);
    else if (i === 1)
    rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Square inch";
    if (i === 0)
    leftSelect.add(option);
    else if (i === 1)
    rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Hectare";
    if (i === 0)
    leftSelect.add(option);
    else if (i === 1)
    rightSelect.add(option);
    var option = document.createElement("option");
    option.innerHTML="Acre";
    if (i === 0)
    leftSelect.add(option);
    else if (i === 1)
    rightSelect.add(option);
  }
}
