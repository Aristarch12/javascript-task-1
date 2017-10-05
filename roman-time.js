'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (!isValidFormat(time)) {
        throw new TypeError('invalid time format');
    }
    let parsedTime = parseTime(time);

    return parsedTime.map(romanNumber).join(':');
}

function romanNumber(number) {
    if (number === 0) {
        return 'N';
    }
    var digits = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',
                  '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

    return digits[Math.floor(number / 10)] + digits[10 + number % 10];
}

function parseTime(time) {
    var numbers = time.split(':').map(Number);
    var hours = numbers[0];
    var minutes = numbers[1];

    return [hours, minutes];
}

function isValidFormat(time) {
    if (time === null) {
        return false;
    }
    if (typeof (time) !== 'string' && !(time instanceof String)) {
        return false;
    }
    if (!time.match(/^\d\d:\d\d$/)) {
        return false;
    }
    var [hours, minutes] = parseTime(time);

    return hours < 24 && minutes < 60;
}

module.exports = romanTime;
