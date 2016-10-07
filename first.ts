class myfirsttypescript{
  constructor(public message:string){


  }
sayit(){

  return "<h1>"+this.message+"<h1>";
}

};

var hw = new myfirsttypescript("My first Type Script program!!! yayy!!!");
document.body.innerHTML=hw.sayit();
