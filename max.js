function findMax(num) 
{
  if (num.length === 0) 
  {
    return null; 
  }

  var max = num[0]; 

  for (var i = 1; i < num.length; i++) 
  {
    if (num[i] > max) {
      max = num[i]; 
    }
  }
  return max;
}

var num = [4, 16, 5, 3, 9, 10];
var maxNum = findMax(num);
console.log(maxNum); 

