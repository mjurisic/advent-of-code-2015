var rl = require('readline').createInterface({
    terminal: false, input: require('fs').createReadStream('input.txt')
});

var sLen = 0;
var parsedLen = 0;

rl.on('line', function (line) {
    sLen = sLen + line.length;
    var escapedString = doEscape(line);
    parsedLen = parsedLen + escapedString.length;
});

rl.on("close", function () {
    console.log('String len: ' + sLen);
    console.log('Parsed len: ' + parsedLen);
    console.log('Difference: ' + (parsedLen - sLen));

});

function doEscape(str) {
    str = str.replace(/\\/g, '\\\\');
    str = str.replace(/\"/g, '\\\"');
    str = '\"' + str + '\"';
    return str;
}
