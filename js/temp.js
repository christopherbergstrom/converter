var Temp = function()
{

}
Temp.prototype.cToF = function(num)
{
  var result = (num * 9/5) + 32;
  return result;
}
Temp.prototype.fToC = function(num)
{
  var result = (num - 32) * (5/9);
  return result;
}
