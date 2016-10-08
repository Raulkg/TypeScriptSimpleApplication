var myfirsttypescript = (function () {
    function myfirsttypescript(message) {
        this.message = message;
    }
    myfirsttypescript.prototype.sayit = function () {
        return "<h1>" + this.message + "<h1>";
    };
    return myfirsttypescript;
}());
;
var hw = new myfirsttypescript("My first Type Script program!!! yayy!!!");
document.body.innerHTML = hw.sayit();
//# sourceMappingURL=first.js.map