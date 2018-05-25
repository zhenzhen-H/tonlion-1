"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var a = function a(_a, b) {
    _a + b;
};

var Fn = function () {
    function Fn() {
        _classCallCheck(this, Fn);

        console.log(1);
    }

    _createClass(Fn, [{
        key: "show",
        value: function show() {
            alert("i am show");
        }
    }]);

    return Fn;
}();

var b = {
    a: 1
};
var c = {
    b: 1
};

var d = Object.assign(b, c);