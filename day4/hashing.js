var md5 = require('./md5');
var num = 0;
var s = 'yzbqklnj';
while(true) {
    var hash = md5.md5(s + num);
    if (hash.indexOf('000000') == 0) {
        console.log(num, hash);
        break;
    }
    num++;
}

