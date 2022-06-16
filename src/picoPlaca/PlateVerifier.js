"use strict";
exports.__esModule = true;
var PlateVerifier = /** @class */ (function () {
    function PlateVerifier() {
        this.notPermitedRanges = [
            ["07:00", "09:30"],
            ["16:00", "19:30"],
        ];
        this.digitsPerDay = [[], [1, 2], [3, 4], [5, 6], [7, 8], [9, 0], []];
    }
    PlateVerifier.prototype.hourInRange = function (time, ranges) {
        return time >= ranges[0] && time <= ranges[1];
    };
    PlateVerifier.prototype.picoPlacaPredictor = function (plate, date, time) {
        var _a = this, hourInRange = _a.hourInRange, digitsPerDay = _a.digitsPerDay, notPermitedRanges = _a.notPermitedRanges;
        var plateLastDigit = parseInt(plate[plate.length - 1]);
        var day = date.getDay();
        var restrictedPlates = digitsPerDay[day];
        if (hourInRange(time, notPermitedRanges[0]) ||
            hourInRange(time, notPermitedRanges[1])) {
            return restrictedPlates.indexOf(plateLastDigit) >= 0;
        }
        return false;
    };
    return PlateVerifier;
}());
exports["default"] = PlateVerifier;
