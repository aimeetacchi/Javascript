  var widthsize = 0;

	const mygrowingdiv = document.getElementById("growme")
  const listen = myButton.addEventListener('click', growMe);
  const listentwo = myButtonTwo.addEventListener('click', shrinkMe);
  const shrinkbutton = document.getElementById("myButtonTwo")

	function growMe() {
    console.log(widthsize);
    if (widthsize === 100) {
      widthsize = 0;
    } else {
		console.log (mygrowingdiv);
	widthsize = widthsize + 20;
  }
    mygrowingdiv.style.width = widthsize + "%";
  }

  function shrinkMe() {
    if (widthsize > 0) {
  	widthsize = widthsize - 20;
  }
    mygrowingdiv.style.width = widthsize + "%";
  }