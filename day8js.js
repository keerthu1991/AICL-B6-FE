myFunction();
function myFunction() {
    const carName = "Volvo";
    document.getElementById("demo1").innerHTML = carName;
    //alert(carName);
  }
  myFunction();
  function varFunction(){
    var pi = 3.14;
    var person = "John Doe";
    var answer = 'Yes I am!';
    
    document.getElementById("demo").innerHTML =
    pi + "<br>" + person + "<br>" + answer;
  }
  varFunction();
  function addNumbers(){
      var x=100;
      var y=10;
      var z=x % y;
     alert(z);
  }
  addNumbers();

  //let,const