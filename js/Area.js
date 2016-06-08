var Area = function(){};
Area.prototype.left = function(one, two, num)
{
  if (one === "Square kilometer" && two === "Square meter")
    rightIn.value = area.k2Tom2(num);
  else if (one === "Square meter" && two === "Square kilometer")
    rightIn.value = area.m2Tok2(num);
  else if (one === "Celcius" && two === "Kelvin")
    rightIn.value = area.cToK(num);
  else if (one === "Kelvin" && two === "Celcius")
    rightIn.value = area.kToC(num);
  else if (one === "Fahrenheit" && two === "Kelvin")
    rightIn.value = area.fToK(num);
  else if (one === "Kelvin" && two === "Fahrenheit")
    rightIn.value = area.kToF(num);
  else if (one === "Square kilometer" && two === "Square kilometer")
    rightIn.value = num;
  else if (one === "Square meter" && two === "Square meter")
    rightIn.value = num;
  else if (one === "Square mile" && two === "Square mile")
    rightIn.value = num;
  else if (one === "Square yard" && two === "Square yard")
    rightIn.value = num;
  else if (one === "Square foot" && two === "Square foot")
    rightIn.value = num;
  else if (one === "Square inch" && two === "Square inch")
    rightIn.value = num;
  else if (one === "Hectare" && two === "Hectare")
    rightIn.value = num;
  else if (one === "Acre" && two === "Acre")
    rightIn.value = num;
}
Area.prototype.right = function(one, two, num)
{
  if (one === "Celcius" && two === "Fahrenheit")
    leftIn.value = area.fToC(num);
  else if (one === "Fahrenheit" && two === "Celcius")
    leftIn.value = area.cToF(num);
  else if (one === "Celcius" && two === "Kelvin")
    leftIn.value = area.kToC(num);
  else if (one === "Kelvin" && two === "Celcius")
    leftIn.value = area.cToK(num);
  else if (one === "Fahrenheit" && two === "Kelvin")
    leftIn.value = area.kToF(num);
  else if (one === "Kelvin" && two === "Fahrenheit")
    leftIn.value = area.fToK(num);
  else if (one === "Fahrenheit" && two === "Fahrenheit")
    rightIn.value = num;
  else if (one === "Celcius" && two === "Celcius")
    rightIn.value = num;
  else if (one === "Kelvin" && two === "Kelvin")
    rightIn.value = num;
}
Area.prototype.cToF = function(num)
{
  return (num * 9/5) + 32;
}
Area.prototype.fToC = function(num)
{
  return (num - 32) * (5/9);
}
Area.prototype.cToK = function(num)
{
  return num + 273.15;
}
Area.prototype.kToC = function(num)
{
  return num - 273.15;
}
Area.prototype.fToK = function(num)
{
  return (num + 459.67) * (5/9);
}
Area.prototype.kToF = function(num)
{
  return (num * (9/5)) - 459.67;
}
