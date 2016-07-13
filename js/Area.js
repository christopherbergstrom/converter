var Area = function(){};
Area.prototype.left = function(one, two, num)
{
  if (one === "Square kilometer" && two === "Square kilometer")
    rightIn.value = num;
  else if (one === "Square kilometer" && two === "Square meter")
    rightIn.value = area.kmToMeter(num);
  else if (one === "Square kilometer" && two === "Square mile")
    rightIn.value = area.kmToMile(num);
  else if (one === "Square kilometer" && two === "Square yard")
    rightIn.value = area.kmToYard(num);
  else if (one === "Square kilometer" && two === "Square foot")
    rightIn.value = area.kmToFoot(num);
  else if (one === "Square kilometer" && two === "Square inch")
    rightIn.value = area.kmToInch(num);
  else if (one === "Square kilometer" && two === "Hectare")
    rightIn.value = area.kmToHectare(num);
  else if (one === "Square kilometer" && two === "Acre")
    rightIn.value = area.kmToAcre(num);

  else if (one === "Square meter" && two === "Square kilometer")
    rightIn.value = area.meterToKm(num);
  else if (one === "Square meter" && two === "Square meter")
    rightIn.value = num;
  else if (one === "Square meter" && two === "Square mile")
    rightIn.value = area.meterToMile(num);
  else if (one === "Square meter" && two === "Square yard")
    rightIn.value = area.meterToYard(num);
  else if (one === "Square meter" && two === "Square foot")
    rightIn.value = area.meterToFoot(num);
  else if (one === "Square meter" && two === "Square inch")
    rightIn.value = area.meterToInch(num);
  else if (one === "Square meter" && two === "Hectare")
    rightIn.value = area.meterToHectare(num);
  else if (one === "Square meter" && two === "Acre")
    rightIn.value = area.meterToAcre(num);

  else if (one === "Square mile" && two === "Square kilometer")
    rightIn.value = area.mileToKm(num);
  else if (one === "Square mile" && two === "Square meter")
    rightIn.value = area.mileToMeter(num);
  else if (one === "Square mile" && two === "Square mile")
    rightIn.value = num;
  else if (one === "Square mile" && two === "Square yard")
    rightIn.value = area.mileToYard(num);
  else if (one === "Square mile" && two === "Square foot")
    rightIn.value = area.mileToFoot(num);
  else if (one === "Square mile" && two === "Square inch")
    rightIn.value = area.mileToInch(num);
  else if (one === "Square mile" && two === "Hectare")
    rightIn.value = area.mileToHectare(num);
  else if (one === "Square mile" && two === "Acre")
    rightIn.value = area.mileToAcre(num);

  else if (one === "Square yard" && two === "Square kilometer")
    rightIn.value = area.yardToKm(num);
  else if (one === "Square yard" && two === "Square meter")
    rightIn.value = area.yardToMeter(num);
  else if (one === "Square yard" && two === "Square mile")
    rightIn.value = area.yardToMile(num);
  else if (one === "Square yard" && two === "Square yard")
    rightIn.value = num;
  else if (one === "Square yard" && two === "Square foot")
    rightIn.value = area.yardToFoot(num);
  else if (one === "Square yard" && two === "Square inch")
    rightIn.value = area.yardToInch(num);
  else if (one === "Square yard" && two === "Hectare")
    rightIn.value = area.yardToHectare(num);
  else if (one === "Square yard" && two === "Acre")
    rightIn.value = area.yardToAcre(num);

  else if (one === "Square foot" && two === "Square kilometer")
    rightIn.value = area.footToKm(num);
  else if (one === "Square foot" && two === "Square meter")
    rightIn.value = area.footToMeter(num);
  else if (one === "Square foot" && two === "Square mile")
    rightIn.value = area.footToMile(num);
  else if (one === "Square foot" && two === "Square yard")
    rightIn.value = area.footToYard(num);
  else if (one === "Square foot" && two === "Square foot")
    rightIn.value = num;
  else if (one === "Square foot" && two === "Square inch")
    rightIn.value = area.footToInch(num);
  else if (one === "Square foot" && two === "Hectare")
    rightIn.value = area.footToHectare(num);
  else if (one === "Square foot" && two === "Acre")
    rightIn.value = area.footToAcre(num);

  else if (one === "Square inch" && two === "Square kilometer")
    rightIn.value = area.inchToKm(num);
  else if (one === "Square inch" && two === "Square meter")
    rightIn.value = area.inchToMeter(num);
  else if (one === "Square inch" && two === "Square mile")
    rightIn.value = area.inchToMile(num);
  else if (one === "Square inch" && two === "Square yard")
    rightIn.value = area.inchToYard(num);
  else if (one === "Square inch" && two === "Square foot")
    rightIn.value = area.inchToFoot(num);
  else if (one === "Square inch" && two === "Square inch")
    rightIn.value = num;
  else if (one === "Square inch" && two === "Hectare")
    rightIn.value = area.inchToHectare(num);
  else if (one === "Square inch" && two === "Acre")
    rightIn.value = area.inchToAcre(num);

  else if (one === "Hectare" && two === "Square kilometer")
    rightIn.value = area.hectareToKm(num);
  else if (one === "Hectare" && two === "Square meter")
    rightIn.value = area.hectareToMeter(num);
  else if (one === "Hectare" && two === "Square mile")
    rightIn.value = area.hectareToMile(num);
  else if (one === "Hectare" && two === "Square yard")
    rightIn.value = area.hectareToYard(num);
  else if (one === "Hectare" && two === "Square foot")
    rightIn.value = area.hectareToFoot(num);
  else if (one === "Hectare" && two === "Square inch")
    rightIn.value = area.hectareToInch(num);
  else if (one === "Hectare" && two === "Hectare")
    rightIn.value = num;
  else if (one === "Hectare" && two === "Acre")
    rightIn.value = area.hectareToAcre(num);

  else if (one === "Acre" && two === "Square kilometer")
    rightIn.value = area.acreToKm(num);
  else if (one === "Acre" && two === "Square meter")
    rightIn.value = area.acreToMeter(num);
  else if (one === "Acre" && two === "Square mile")
    rightIn.value = area.acreToMile(num);
  else if (one === "Acre" && two === "Square yard")
    rightIn.value = area.acreToYard(num);
  else if (one === "Acre" && two === "Square foot")
    rightIn.value = area.acreToFoot(num);
  else if (one === "Acre" && two === "Square inch")
    rightIn.value = area.acreToInch(num);
  else if (one === "Acre" && two === "Hectare")
    rightIn.value = area.acreToHectare(num);
  else if (one === "Acre" && two === "Acre")
    rightIn.value = num;
}
Area.prototype.right = function(one, two, num)
{
  if (one === "Square kilometer" && two === "Square kilometer")
    leftIn.value = num;
  else if (one === "Square kilometer" && two === "Square meter")
    leftIn.value = area.meterToKm(num);
  else if (one === "Square kilometer" && two === "Square mile")
    leftIn.value = area.mileToKm(num);
  else if (one === "Square kilometer" && two === "Square yard")
    leftIn.value = area.yardToKm(num);
  else if (one === "Square kilometer" && two === "Square foot")
    leftIn.value = area.footToKm(num);
  else if (one === "Square kilometer" && two === "Square inch")
    leftIn.value = area.inchToKm(num);
  else if (one === "Square kilometer" && two === "Hectare")
    leftIn.value = area.hectareToKm(num);
  else if (one === "Square kilometer" && two === "Acre")
    leftIn.value = area.acreToKm(num);

  else if (one === "Square meter" && two === "Square kilometer")
    leftIn.value = area.kmToMeter(num);
  else if (one === "Square meter" && two === "Square meter")
    leftIn.value = num;
  else if (one === "Square meter" && two === "Square mile")
    leftIn.value = area.mileToMeter(num);
  else if (one === "Square meter" && two === "Square yard")
    leftIn.value = area.yardToMeter(num);
  else if (one === "Square meter" && two === "Square foot")
    leftIn.value = area.footToMeter(num);
  else if (one === "Square meter" && two === "Square inch")
    leftIn.value = area.inchToMeter(num);
  else if (one === "Square meter" && two === "Hectare")
    leftIn.value = area.hectareToMeter(num);
  else if (one === "Square meter" && two === "Acre")
    leftIn.value = area.acreToMeter(num);

  else if (one === "Square mile" && two === "Square kilometer")
    leftIn.value = area.kmToMile(num);
  else if (one === "Square mile" && two === "Square meter")
    leftIn.value = area.meterToMile(num);
  else if (one === "Square mile" && two === "Square mile")
    leftIn.value = num;
  else if (one === "Square mile" && two === "Square yard")
    leftIn.value = area.yardToMile(num);
  else if (one === "Square mile" && two === "Square foot")
    leftIn.value = area.footToMile(num);
  else if (one === "Square mile" && two === "Square inch")
    leftIn.value = area.inchToMile(num);
  else if (one === "Square mile" && two === "Hectare")
    leftIn.value = area.hectareToMile(num);
  else if (one === "Square mile" && two === "Acre")
    leftIn.value = area.acreToMile(num);

  else if (one === "Square yard" && two === "Square kilometer")
    leftIn.value = area.kmToYard(num);
  else if (one === "Square yard" && two === "Square meter")
    leftIn.value = area.meterToYard(num);
  else if (one === "Square yard" && two === "Square mile")
    leftIn.value = area.mileToYard(num);
  else if (one === "Square yard" && two === "Square yard")
    leftIn.value = num;
  else if (one === "Square yard" && two === "Square foot")
    leftIn.value = area.footToYard(num);
  else if (one === "Square yard" && two === "Square inch")
    leftIn.value = area.inchToYard(num);
  else if (one === "Square yard" && two === "Hectare")
    leftIn.value = area.hectareToYard(num);
  else if (one === "Square yard" && two === "Acre")
    leftIn.value = area.acreToYard(num);

  else if (one === "Square foot" && two === "Square kilometer")
    leftIn.value = area.kmToFoot(num);
  else if (one === "Square foot" && two === "Square meter")
    leftIn.value = area.meterToFoot(num);
  else if (one === "Square foot" && two === "Square mile")
    leftIn.value = area.mileToFoot(num);
  else if (one === "Square foot" && two === "Square yard")
    leftIn.value = area.yardToFoot(num);
  else if (one === "Square foot" && two === "Square foot")
    leftIn.value = num;
  else if (one === "Square foot" && two === "Square inch")
    leftIn.value = area.inchToFoot(num);
  else if (one === "Square foot" && two === "Hectare")
    leftIn.value = area.hectareToFoot(num);
  else if (one === "Square foot" && two === "Acre")
    leftIn.value = area.acreToFoot(num);

  else if (one === "Square inch" && two === "Square kilometer")
    leftIn.value = area.kmToInch(num);
  else if (one === "Square inch" && two === "Square meter")
    leftIn.value = area.meterToInch(num);
  else if (one === "Square inch" && two === "Square mile")
    leftIn.value = area.mileToInch(num);
  else if (one === "Square inch" && two === "Square yard")
    leftIn.value = area.yardToInch(num);
  else if (one === "Square inch" && two === "Square foot")
    leftIn.value = area.footToInch(num);
  else if (one === "Square inch" && two === "Square inch")
    leftIn.value = num;
  else if (one === "Square inch" && two === "Hectare")
    leftIn.value = area.hectareToInch(num);
  else if (one === "Square inch" && two === "Acre")
    leftIn.value = area.acreToInch(num);

  else if (one === "Hectare" && two === "Square kilometer")
    leftIn.value = area.kmToHectare(num);
  else if (one === "Hectare" && two === "Square meter")
    leftIn.value = area.meterToHectare(num);
  else if (one === "Hectare" && two === "Square mile")
    leftIn.value = area.mileToHectare(num);
  else if (one === "Hectare" && two === "Square yard")
    leftIn.value = area.yardToHectare(num);
  else if (one === "Hectare" && two === "Square foot")
    leftIn.value = area.footToHectare(num);
  else if (one === "Hectare" && two === "Square inch")
    leftIn.value = area.inchToHectare(num);
  else if (one === "Hectare" && two === "Hectare")
    leftIn.value = num;
  else if (one === "Hectare" && two === "Acre")
    leftIn.value = area.acreToHectare(num);

  else if (one === "Acre" && two === "Square kilometer")
    leftIn.value = area.kmToAcre(num);
  else if (one === "Acre" && two === "Square meter")
    leftIn.value = area.meterToAcre(num);
  else if (one === "Acre" && two === "Square mile")
    leftIn.value = area.mileToAcre(num);
  else if (one === "Acre" && two === "Square yard")
    leftIn.value = area.yardToAcre(num);
  else if (one === "Acre" && two === "Square foot")
    leftIn.value = area.footToAcre(num);
  else if (one === "Acre" && two === "Square inch")
    leftIn.value = area.inchToAcre(num);
  else if (one === "Acre" && two === "Hectare")
    leftIn.value = area.hectareToAcre(num);
  else if (one === "Acre" && two === "Acre")
    leftIn.value = num;
}
Area.prototype.kmToMeter = function(num)
{
  return num * 1000000;
}
Area.prototype.kmToMile = function(num)
{
  return num * 0.3861;
}
Area.prototype.kmToYard = function(num)
{
  return num * 1196000;
}
Area.prototype.kmToFoot = function(num)
{
  return num * 10764000;
}
Area.prototype.kmToInch = function(num)
{
  return num * 1550000000;
}
Area.prototype.kmToHectare = function(num)
{
  return num * 100;
}
Area.prototype.kmToAcre = function(num)
{
  return num * 247.11;
}
Area.prototype.meterToKm = function(num)
{
  return num / 1000000;
}
Area.prototype.meterToMile = function(num)
{
  return num * 0.00000038610216;
}
Area.prototype.meterToYard = function(num)
{
  return num * 1.196;
}
Area.prototype.meterToFoot = function(num)
{
  return num * 10.764;
}
Area.prototype.meterToInch = function(num)
{
  return num * 1550;
}
Area.prototype.meterToHectare = function(num)
{
  return num * 0.00010000;
}
Area.prototype.meterToAcre = function(num)
{
  return num * 0.00024711;
}
Area.prototype.mileToKm = function(num)
{
  return num / 0.3861;
}
Area.prototype.mileToMeter = function(num)
{
  return num / 0.00000038610216;
}
Area.prototype.mileToYard = function(num)
{
  return num * 3097600;
}
Area.prototype.mileToFoot = function(num)
{
  return num * 27878000;
}
Area.prototype.mileToInch = function(num)
{
  return num * 4014500000;
}
Area.prototype.mileToHectare = function(num)
{
  return num / 0.003861;
}
Area.prototype.mileToAcre = function(num)
{
  return num / 0.0015625;
}
Area.prototype.yardToKm = function(num)
{
  return num / 1196000;
}
Area.prototype.yardToMeter = function(num)
{
  return num / 1.196;
}
Area.prototype.yardToMile = function(num)
{
  return num / 3097600;
}
Area.prototype.yardToFoot = function(num)
{
  return num * 9;
}
Area.prototype.yardToInch = function(num)
{
  return num / 0.0007716;
}
Area.prototype.yardToHectare = function(num)
{
  return num / 11960;
}
Area.prototype.yardToAcre = function(num)
{
  return num / 4840;
}
Area.prototype.footToKm = function(num)
{
  return num / 10764000;
}
Area.prototype.footToMeter = function(num)
{
  return num / 10.764;
}
Area.prototype.footToMile = function(num)
{
  return num / 27878000;
}
Area.prototype.footToYard = function(num)
{
  return num / 9;
}
Area.prototype.footToInch = function(num)
{
  return num * 144;
}
Area.prototype.footToHectare = function(num)
{
  return num / 107640;
}
Area.prototype.footToAcre = function(num)
{
  return num / 43560;
}
Area.prototype.inchToKm = function(num)
{
  return num / 1550000000;
}
Area.prototype.inchToMeter = function(num)
{
  return num / 1550;
}
Area.prototype.inchToMile = function(num)
{
  return num / 4014500000;
}
Area.prototype.inchToYard = function(num)
{
  return num * 0.0007716;
}
Area.prototype.inchToFoot = function(num)
{
  return num / 144;
}
Area.prototype.inchToHectare = function(num)
{
  return num / 15500000;
}
Area.prototype.inchToAcre = function(num)
{
  return num / 6272600;
}
Area.prototype.hectareToKm = function(num)
{
  return num / 100;
}
Area.prototype.hectareToMeter = function(num)
{
  return num / 0.00010000;
}
Area.prototype.hectareToMile = function(num)
{
  return num * 0.003861;
}
Area.prototype.hectareToYard = function(num)
{
  return num * 11960;
}
Area.prototype.hectareToFoot = function(num)
{
  return num * 107640;
}
Area.prototype.hectareToInch = function(num)
{
  return num * 15500000;
}
Area.prototype.hectareToAcre = function(num)
{
  return num * 2.4711;
}
Area.prototype.acreToKm = function(num)
{
  return num / 247.11;
}
Area.prototype.acreToMeter = function(num)
{
  return num / 0.00024711;
}
Area.prototype.acreToMile = function(num)
{
  return num * 0.0015625;
}
Area.prototype.acreToYard = function(num)
{
  return num * 4840;
}
Area.prototype.acreToFoot = function(num)
{
  return num * 43560;
}
Area.prototype.acreToInch = function(num)
{
  return num * 6272600;
}
Area.prototype.acreToHectare = function(num)
{
  return num / 2.4711;
}
