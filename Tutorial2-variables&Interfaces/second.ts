class secondtutorial{
  isSet:boolean = false;
  constructor(public message:string){}
  //function to retunr Boolean value
showBool(){
  return this.isSet;
}
};

interface vehicle{
  wheels:string;
  type:string;
  color:string;
  getColor(): any;
  getFuel(name:string): any;



}

class jeep implements vehicle{
  wheels:string;
  type:string;
  color:string ="black";

getColor(){

  return this.color;
}

  getFuel(name:string){

return "This vehicle uses "+name+" fuel";

  }




}



//creating abstract class
abstract class Fruit{

  constructor(public name: string , public color: string , public taste: string) {
 }
    abstract getTaste():void;

    getColor():void{
      console.log("I have "+this.color +" Color");

    }

    printName(): void {
        console.log("Fruit name: " + this.name);
    }


}


class Apple extends Fruit{
  constructor() {
         super("Apple","Red","Sweet"); // constructors in derived classes must call super()
     }
  getTaste(): string {
        return (this.name+" is a Sweet tasting Fruit");
    }

    getMsg(): void {

      console.log("Every day an apple keeps a doctor away ");
    }

}

let myfruit = new Apple();
document.body.innerHTML = myfruit.getTaste();
myfruit.getMsg();
myfruit.getColor();

let myvehicle = new jeep();

document.body.innerHTML +=   "    &nbsp; ** This vehicle color is "+myvehicle.getColor();
document.body.innerHTML += "     &nbsp; ** "+myvehicle.getFuel("Gasoline");
document.body.innerHTML += "     &nbsp; ** "+myvehicle.getFuel("Diesel");
