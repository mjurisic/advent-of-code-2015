var rl = require('readline').createInterface({
    terminal: false, input: require('fs').createReadStream('input.txt')
});
var total = 0;
var totalRibbon = 0;
rl.on('line', function (line) {
    console.log('Line from file:', line);
    var numbers = line.split('x');
    var a = parseInt(numbers[0]);
    var b = parseInt(numbers[1]);
    var c = parseInt(numbers[2]);

    var side1 = a * b;
    var side2 = a * c;
    var side3 = b * c;

    var reserve = Math.min(side1, side2, side3);

    var area = 2 * side1 + 2 * side2 + 2 * side3 + reserve;

    var maxLength = Math.max(a, b, c);
    var ribbon = a * b * c;
    console.log(a, b, c, ribbon);
    if (a == maxLength) {
        console.log('s1')
        ribbon = ribbon + 2 * b + 2 * c;
    } else if (b == maxLength) {
        console.log('s2')
        ribbon = ribbon + 2 * a + 2 * c;
    } else {
        console.log('s2')
        ribbon = ribbon + 2 * a + 2 * b
    }

    total = total + area;
    totalRibbon = totalRibbon + ribbon;
    console.log('Area: ' + area);
    console.log('Ribbon: ' + ribbon);
    console.log('Total: ' + total);
    console.log('Total ribbon: ' + totalRibbon);
    console.log('------------------------------------');
});
