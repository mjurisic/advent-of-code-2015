var rl = require('readline').createInterface({
    terminal: false, input: require('fs').createReadStream('input.txt')
});

var vowels = 'aeiou';
var disallowed = ['ab', 'cd', 'pq', 'xy'];
var totalNice = 0;
rl.on('line', function (line) {
    console.log(line);
    var vowNum = 0;
    var hasDouble = false;
    var hasDisallowed = false;
    for (var i = 0; i < line.length; i++) {
        if (vowels.indexOf(line.charAt(i)) >= 0) {
            vowNum++;
        }

        if (i > 0 && line.charAt(i) == line.charAt(i - 1)) {
            hasDouble = true;
        }
    }

    for (var i = 0; i < disallowed.length; i++) {
        if (line.indexOf(disallowed[i]) != -1) {
            hasDisallowed = true;
        }
    }
    if (vowNum >= 3 && !hasDisallowed && hasDouble) {
        //console.log('nice');
        totalNice++;
        console.log(totalNice);
    }

    console.log('------------------------------------');
});
