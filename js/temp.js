var Temp = function()
{

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
  console.log(num);
  console.log(num + 459.67);
  console.log(5/9);
  console.log((num + 459.67) * (5/9));
  return (num + 459.67) * (5/9);
}
Temp.prototype.kToF = function(num)
{
  return (num * (9/5)) - 459.67;
}
