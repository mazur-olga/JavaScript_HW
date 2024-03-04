// The first option:
function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        row += symbol;
      }
      console.log(row);
    }
  }

  drawTriangle(7, '*');


// The second option:
function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
      console.log(symbol.repeat(i));
    }
  }

  drawTriangle(7, '*');