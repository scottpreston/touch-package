"use strict";

var touchPackage = function () {
};

touchPackage.prototype.exec = function () {
    var fs = require('fs');
    fs.createReadStream(__dirname +  '/sample-package.json').pipe(fs.createWriteStream('package.json'));
    console.log('created blank package.json');
};

module.exports = touchPackage;

