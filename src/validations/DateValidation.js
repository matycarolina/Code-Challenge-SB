"use strict";
exports.__esModule = true;
var DateValidation = /** @class */ (function () {
    function DateValidation() {
        this.date = "15-06-2022";
    }
    DateValidation.prototype.dateFormat = function (dateCheck) {
        return /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/.test(dateCheck);
    };
    DateValidation.prototype.isValid = function (date) {
        return this.dateFormat(date);
    };
    return DateValidation;
}());
exports["default"] = DateValidation;
