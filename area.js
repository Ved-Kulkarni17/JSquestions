function calculateArea() 
{
  var length = parseFloat(prompt("Length: "));
  var width = parseFloat(prompt("Width: "));

  var area = length * width;
  return area;
}

var rectangleArea = calculateArea();
console.log(rectangleArea);
