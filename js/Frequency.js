class Frequency
{
  left(one, two, num)
  {
    if (one === "Hertz" && two === "Hertz")
      rightIn.value = num;
    else if (one === "Hertz" && two === "Kilohertz")
      rightIn.value = frequency.hToKh(num);
    else if (one === "Hertz" && two === "Megahertz")
      rightIn.value = frequency.hToMh(num);
    else if (one === "Hertz" && two === "Gigahertz")
      rightIn.value = frequency.hToGh(num);
  
    else if (one === "Kilohertz" && two === "Hertz")
      rightIn.value = frequency.khToH(num);
    else if (one === "Kilohertz" && two === "Kilohertz")
      rightIn.value = num;
    else if (one === "Kilohertz" && two === "Megahertz")
      rightIn.value = frequency.khToMh(num);
    else if (one === "Kilohertz" && two === "Gigahertz")
      rightIn.value = frequency.khToGh(num);
  
    else if (one === "Megahertz" && two === "Hertz")
      rightIn.value = frequency.mhToH(num);
    else if (one === "Megahertz" && two === "Kilohertz")
      rightIn.value = frequency.mhToKh(num);
    else if (one === "Megahertz" && two === "Megahertz")
      rightIn.value = num;
    else if (one === "Megahertz" && two === "Gigahertz")
      rightIn.value = frequency.mhToGh(num);
  
    else if (one === "Gigahertz" && two === "Hertz")
      rightIn.value = frequency.ghToH(num);
    else if (one === "Gigahertz" && two === "Kilohertz")
      rightIn.value = frequency.ghToKh(num);
    else if (one === "Gigahertz" && two === "Megahertz")
      rightIn.value = frequency.ghToMh(num);
    else if (one === "Gigahertz" && two === "Gigahertz")
      rightIn.value = num;
  }
  right(one, two, num)
  {
    if (one === "Hertz" && two === "Hertz")
      leftIn.value = num;
    else if (one === "Hertz" && two === "Kilohertz")
      leftIn.value = frequency.khToH(num);
    else if (one === "Hertz" && two === "Megahertz")
      leftIn.value = frequency.mhToH(num);
    else if (one === "Hertz" && two === "Gigahertz")
      leftIn.value = frequency.ghToH(num);
  
    else if (one === "Kilohertz" && two === "Hertz")
      leftIn.value = frequency.hToKh(num);
    else if (one === "Kilohertz" && two === "Kilohertz")
      leftIn.value = num;
    else if (one === "Kilohertz" && two === "Megahertz")
      leftIn.value = frequency.mhToKh(num);
    else if (one === "Kilohertz" && two === "Gigahertz")
      leftIn.value = frequency.ghToKh(num);
  
    else if (one === "Megahertz" && two === "Hertz")
      leftIn.value = frequency.hToMh(num);
    else if (one === "Megahertz" && two === "Kilohertz")
      leftIn.value = frequency.khToMh(num);
    else if (one === "Megahertz" && two === "Megahertz")
      leftIn.value = num;
    else if (one === "Megahertz" && two === "Gigahertz")
      leftIn.value = frequency.ghToMh(num);
  
    else if (one === "Gigahertz" && two === "Hertz")
      leftIn.value = frequency.hToGh(num);
    else if (one === "Gigahertz" && two === "Kilohertz")
      leftIn.value = frequency.khToGh(num);
    else if (one === "Gigahertz" && two === "Megahertz")
      leftIn.value = frequency.mhToGh(num);
    else if (one === "Gigahertz" && two === "Gigahertz")
      leftIn.value = num;
  }
  hToKh(num)
  {
    return num / 1000;
  }
  hToMh(num)
  {
    return num / 1000000;
  }
  hToGh(num)
  {
    return num / Math.pow(10,9);
  }
  khToH(num)
  {
    return num * 1000;
  }
  khToMh(num)
  {
    return num / 1000;
  }
  khToGh(num)
  {
    return num / 1000000;
  }
  mhToH(num)
  {
    return num * 1000000;
  }
  mhToKh(num)
  {
    return num * 1000;
  }
  mhToGh(num)
  {
    return num / 1000;
  }
  ghToH(num)
  {
    return num * Math.pow(10,9);
  }
  ghToKh(num)
  {
    return num * 1000000;
  }
  ghToMh(num)
  {
    return num * 1000;
  }
}
