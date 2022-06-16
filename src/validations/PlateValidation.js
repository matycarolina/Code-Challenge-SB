"use strict";
exports.__esModule = true;
var PlateValidation = /** @class */ (function () {
    function PlateValidation() {
        this.plate = "ABC-123";
    }
    PlateValidation.prototype.onlyLetters = function (stringCheck) {
        return /^[a-zA-Z]+$/.test(stringCheck);
    };
    PlateValidation.prototype.onlyNumbers = function (stringCheck) {
        return /^[0-9]+$/.test(stringCheck);
    };
    PlateValidation.prototype.isValid = function (plateNumber) {
        var letters = plateNumber.split("-")[0];
        var numbers = plateNumber.split("-")[1];
        return this.onlyLetters(letters) && this.onlyNumbers(numbers);
    };
    return PlateValidation;
}());
exports["default"] = PlateValidation;
