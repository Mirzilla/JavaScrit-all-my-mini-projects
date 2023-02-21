"use strict";
const Data1 = [49, 51, 63];
const Data2 = [31, 29, 43, 58, 52];
const days = [1, 2, 3];
const printHumiditiesForecast = function (arr) {
    let str = "... ";
    for (let i = 0; i < arr.lenght; i++) {
        str = str + `${arr[i]}% in ${i + 1} days ... `;
    }
};
console.log(printHumiditiesForecast(Data1));
