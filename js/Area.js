class Area
{
  left(one, two, num)
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
  right(one, two, num)
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
  kmToMeter(num)
  {
    return num * 1000000;
  }
  kmToMile(num)
  {
    return num * 0.3861;
  }
  kmToYard(num)
  {
    return num * 1196000;
  }
  kmToFoot(num)
  {
    return num * 10764000;
  }
  kmToInch(num)
  {
    return num * 1550000000;
  }
  kmToHectare(num)
  {
    return num * 100;
  }
  kmToAcre(num)
  {
    return num * 247.11;
  }
  meterToKm(num)
  {
    return num / 1000000;
  }
  meterToMile(num)
  {
    return num * 0.00000038610216;
  }
  meterToYard(num)
  {
    return num * 1.196;
  }
  meterToFoot(num)
  {
    return num * 10.764;
  }
  meterToInch(num)
  {
    return num * 1550;
  }
  meterToHectare(num)
  {
    return num * 0.00010000;
  }
  meterToAcre(num)
  {
    return num * 0.00024711;
  }
  mileToKm(num)
  {
    return num / 0.3861;
  }
  mileToMeter(num)
  {
    return num / 0.00000038610216;
  }
  mileToYard(num)
  {
    return num * 3097600;
  }
  mileToFoot(num)
  {
    return num * 27878000;
  }
  mileToInch(num)
  {
    return num * 4014500000;
  }
  mileToHectare(num)
  {
    return num / 0.003861;
  }
  mileToAcre(num)
  {
    return num / 0.0015625;
  }
  yardToKm(num)
  {
    return num / 1196000;
  }
  yardToMeter(num)
  {
    return num / 1.196;
  }
  yardToMile(num)
  {
    return num / 3097600;
  }
  yardToFoot(num)
  {
    return num * 9;
  }
  yardToInch(num)
  {
    return num / 0.0007716;
  }
  yardToHectare(num)
  {
    return num / 11960;
  }
  yardToAcre(num)
  {
    return num / 4840;
  }
  footToKm(num)
  {
    return num / 10764000;
  }
  footToMeter(num)
  {
    return num / 10.764;
  }
  footToMile(num)
  {
    return num / 27878000;
  }
  footToYard(num)
  {
    return num / 9;
  }
  footToInch(num)
  {
    return num * 144;
  }
  footToHectare(num)
  {
    return num / 107640;
  }
  footToAcre(num)
  {
    return num / 43560;
  }
  inchToKm(num)
  {
    return num / 1550000000;
  }
  inchToMeter(num)
  {
    return num / 1550;
  }
  inchToMile(num)
  {
    return num / 4014500000;
  }
  inchToYard(num)
  {
    return num * 0.0007716;
  }
  inchToFoot(num)
  {
    return num / 144;
  }
  inchToHectare(num)
  {
    return num / 15500000;
  }
  inchToAcre(num)
  {
    return num / 6272600;
  }
  hectareToKm(num)
  {
    return num / 100;
  }
  hectareToMeter(num)
  {
    return num / 0.00010000;
  }
  hectareToMile(num)
  {
    return num * 0.003861;
  }
  hectareToYard(num)
  {
    return num * 11960;
  }
  hectareToFoot(num)
  {
    return num * 107640;
  }
  hectareToInch(num)
  {
    return num * 15500000;
  }
  hectareToAcre(num)
  {
    return num * 2.4711;
  }
  acreToKm(num)
  {
    return num / 247.11;
  }
  acreToMeter(num)
  {
    return num / 0.00024711;
  }
  acreToMile(num)
  {
    return num * 0.0015625;
  }
  acreToYard(num)
  {
    return num * 4840;
  }
  acreToFoot(num)
  {
    return num * 43560;
  }
  acreToInch(num)
  {
    return num * 6272600;
  }
  acreToHectare(num)
  {
    return num / 2.4711;
  }
}
