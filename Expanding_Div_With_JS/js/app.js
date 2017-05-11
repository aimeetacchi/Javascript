// --- Growing Div Script --- //
var widthsize = 0;
var mygrowingdiv = document.getElementById("growme");

var listen = document.getElementById("myButton");
var listenTwo = document.getElementById("myButtonTwo");

if (listen){
    listen.addEventListener('click', function(){
             
    if (widthsize === 100) {
      widthsize = 0;
    } else {
      widthsize = widthsize + 20;
    }
    mygrowingdiv.style.width = widthsize + "%";

  });
};

if (listenTwo) {
  listenTwo.addEventListener('click', function(){

      if (widthsize > 0) {
        widthsize = widthsize - 20;
      }

      mygrowingdiv.style.width = widthsize + "%";
    
  });
}

 
