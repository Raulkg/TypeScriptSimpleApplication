var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var secondtutorial = (function () {
    function secondtutorial(message) {
        this.message = message;
        this.isSet = false;
    }
    secondtutorial.prototype.showBool = function () {
        return this.isSet;
    };
    return secondtutorial;
}());
;
var jeep = (function () {
    function jeep() {
        this.color = "black";
    }
    jeep.prototype.getColor = function () {
        return this.color;
    };
    jeep.prototype.getFuel = function (name) {
        return "This vehicle uses " + name + " fuel";
    };
    return jeep;
}());
var Fruit = (function () {
    function Fruit(name, color, taste) {
        this.name = name;
        this.color = color;
        this.taste = taste;
    }
    Fruit.prototype.getColor = function () {
        console.log("I have " + this.color + " Color");
    };
    Fruit.prototype.printName = function () {
        console.log("Fruit name: " + this.name);
    };
    return Fruit;
}());
var Apple = (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        _super.call(this, "Apple", "Red", "Sweet");
    }
    Apple.prototype.getTaste = function () {
        return (this.name + " is a Sweet tasting Fruit");
    };
    Apple.prototype.getMsg = function () {
        console.log("Every day an apple keeps a doctor away ");
    };
    return Apple;
}(Fruit));
var myfruit = new Apple();
document.body.innerHTML = myfruit.getTaste();
myfruit.getMsg();
myfruit.getColor();
var myvehicle = new jeep();
document.body.innerHTML += "    &nbsp; ** This vehicle color is " + myvehicle.getColor();
document.body.innerHTML += "     &nbsp; ** " + myvehicle.getFuel("Gasoline");
document.body.innerHTML += "     &nbsp; ** " + myvehicle.getFuel("Diesel");
//# sourceMappingURL=second.js.map