var  test3 = document.getElementById("test3-js");
var breakpoints =  window.matchMedia("(min-width: 678px)");

if( breakpoints.matches ) {
	test3.innerHTML="<img src='origami-js.jpg' width='300' height='200'>";
}

console.log(breakpoints.matches);