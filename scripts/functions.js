// Helpful range checker provided by David Thomas: http://stackoverflow.com/a/18881828
Number.prototype.between = function (a, b, inclusive) {
    var min = Math.min.apply(Math, [a,b]),
        max = Math.max.apply(Math, [a,b]);
    return inclusive ? this >= min && this <= max : this > min && this < max;
};