var rl = require('readline').createInterface({
    terminal: false, input: require('fs').createReadStream('input_part2.txt')
});

var elements = [];

rl.on('line', function (line) {
    var myRegexp = /(.+?) -> (.+)/;
    var match = myRegexp.exec(line);
    elements.push({name: match[2], value: parseOp(match[1])});
});

rl.on("close", function () {


    elements.sort(function (first, second) {
        return first.name.localeCompare(second.name)
    });
    console.log(elements[0].name, elements[0].value());
});

function parseOp(operation) {
    if (operation.indexOf(' ') == -1) {
        return function () {
            return findValue(operation);
        }
    } else if (operation.indexOf('NOT') != -1) {
        return function () {
            return negate(operation.substring(4));
        }
    } else {
        var myRegexp = /(.+) (AND|OR|LSHIFT|RSHIFT) (.+)/;
        var match = myRegexp.exec(operation);
        if (match[2] == 'AND') {
            return function () {
                return gateAnd(match[1], match[3]);
            }
        } else if (match[2] == 'OR') {
            return function () {
                return gateOr(match[1], match[3]);
            }
        } else if (match[2] == 'LSHIFT') {
            return function () {
                return gateLshift(match[1], match[3]);
            }
        } else if (match[2] == 'RSHIFT') {
            return function () {
                return gateRshift(match[1], match[3]);
            }
        }
    }
}


function gateAnd(a, b) {
    return findValue(a) & findValue(b);
}

function gateOr(a, b) {
    return findValue(a) | findValue(b);
}


function gateLshift(num, times) {
    if (times > 1) {
        return gateLshift(findValue(num) << 1, times - 1);
    }
    return findValue(num) << 1;
}

function gateRshift(num, times) {
    if (times > 1) {
        return gateRshift(findValue(num) >> 1, times - 1);
    }
    return findValue(num) >> 1;
}

function negate(num) {
    return 65535 - findValue(num);
}

function findValue(num) {
    if (isNaN(num)) {
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].name == num) {
                if (!elements[i].computedValue) {
                    elements[i].computedValue = elements[i].value()
                }
                return elements[i].computedValue;
            }
        }
    }
    return num;
}
