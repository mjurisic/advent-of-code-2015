var rl = require('readline').createInterface({
    terminal: false, input: require('fs').createReadStream('input.txt')
});

var totalNice = 0;

rl.on('line', function (line) {
    console.log(line);
    var hasPairs = false;
    var hasLetterRepeat = false;

    for (var i = 0; i < line.length; i++) {

        if (i < line.length - 1) {
            var pair = line.charAt(i) + line.charAt(i + 1);
            var first = line.indexOf(pair);
            var second = line.lastIndexOf(pair);
            if (first != second && second - first > 1) {
                //console.log(first, second, pair);
                hasPairs = true;
            }
        }

        if (i > 2 && line.charAt(i) == line.charAt(i - 2)) {
            hasLetterRepeat = true;
        }
    }
    if (hasLetterRepeat && hasPairs) {
        totalNice++;
        console.log('Total nice:' + totalNice);
    }

    console.log('------------------------------------');
});
