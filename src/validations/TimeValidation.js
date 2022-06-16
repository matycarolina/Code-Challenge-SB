"use strict";
exports.__esModule = true;
var TimeValidation = /** @class */ (function () {
    function TimeValidation() {
        this.time = "21:05";
    }
    TimeValidation.prototype.timeFormat = function (timeCheck) {
        return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(timeCheck);
    };
    TimeValidation.prototype.isValid = function (date) {
        return this.timeFormat(date);
    };
    return TimeValidation;
}());
exports["default"] = TimeValidation;
