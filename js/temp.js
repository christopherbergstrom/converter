var Temp = function(){};
Temp.prototype.left = function(one, two, num)
{
  if (one === "Celcius" && two === "Fahrenheit")
    rightIn.value = temp.cToF(num);
  else if (one === "Fahrenheit" && two === "Celcius")
    rightIn.value = temp.fToC(num);
  else if (one === "Celcius" && two === "Kelvin")
    rightIn.value = temp.cToK(num);
  else if (one === "Kelvin" && two === "Celcius")
    rightIn.value = temp.kToC(num);
  else if (one === "Fahrenheit" && two === "Kelvin")
    rightIn.value = temp.fToK(num);
  else if (one === "Kelvin" && two === "Fahrenheit")
    rightIn.value = temp.kToF(num);
  else if (one === "Fahrenheit" && two === "Fahrenheit")
    rightIn.value = num;
  else if (one === "Celcius" && two === "Celcius")
    rightIn.value = num;
  else if (one === "Kelvin" && two === "Kelvin")
    rightIn.value = num;
}
Temp.prototype.right = function(one, two, num)
{
  if (one === "Celcius" && two === "Fahrenheit")
    leftIn.value = temp.fToC(num);
  else if (one === "Fahrenheit" && two === "Celcius")
    leftIn.value = temp.cToF(num);
  else if (one === "Celcius" && two === "Kelvin")
    leftIn.value = temp.kToC(num);
  else if (one === "Kelvin" && two === "Celcius")
    leftIn.value = temp.cToK(num);
  else if (one === "Fahrenheit" && two === "Kelvin")
    leftIn.value = temp.kToF(num);
  else if (one === "Kelvin" && two === "Fahrenheit")
    leftIn.value = temp.fToK(num);
  else if (one === "Fahrenheit" && two === "Fahrenheit")
    rightIn.value = num;
  else if (one === "Celcius" && two === "Celcius")
    rightIn.value = num;
  else if (one === "Kelvin" && two === "Kelvin")
    rightIn.value = num;
}
Temp.prototype.cToF = function(num)
{
  return (num * 9/5) + 32;
}
Temp.prototype.fToC = function(num)
{
  return (num - 32) * (5/9);
}
Temp.prototype.cToK = function(num)
{
  return num + 273.15;
}
Temp.prototype.kToC = function(num)
{
  return num - 273.15;
}
Temp.prototype.fToK = function(num)
{
  return (num + 459.67) * (5/9);
}
Temp.prototype.kToF = function(num)
{
  return (num * (9/5)) - 459.67;
}
