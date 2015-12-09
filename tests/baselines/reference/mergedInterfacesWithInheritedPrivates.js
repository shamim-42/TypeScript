//// [mergedInterfacesWithInheritedPrivates.ts]
class C {
    private x: number;
}

interface A extends C {
    y: string;
}

interface A {
    z: string;
}

class D implements A { // error
    private x: number;
    y: string;
    z: string;
}

class E implements A { // error
    x: number;
    y: string;
    z: string;
}

var a: A;
var r = a.x; // error

//// [mergedInterfacesWithInheritedPrivates.js]
var C = (function () {
    function C() {
    }
    return C;
}());
var D = (function () {
    function D() {
    }
    return D;
}());
var E = (function () {
    function E() {
    }
    return E;
}());
var a;
var r = a.x; // error
