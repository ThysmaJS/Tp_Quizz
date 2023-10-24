let x = 0;
document.getElementById("paris").checked;
document.getElementById("ventre").checked;
document.getElementById("bonjour").checked;

if (document.getElementById("paris").checked === true) {
    x++;
    return x;
}

if (document.getElementById("ventre").checked === true) {
    x++;
    return x;
}

if (document.getElementById("bonjour").checked === true) {
    return x;
}

function testNum(a) {
    let result;
    if (a > 0) {
      result = 'positive';
    } else {
      result = 'NOT positive';
    }
    return result;
  }
  
  console.log(testNum(-5));
