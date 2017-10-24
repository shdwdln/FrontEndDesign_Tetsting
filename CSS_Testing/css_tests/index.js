// Run Webserver for Chrome - choose directory - http://127.0.0.1:8887/

function myFunc() {
    var s = 0;
    for (var i=0; i<100000; i++) {
        s+=i;
    }
    console.log(s);
    console.log("Hey homies!");

    //runThis();

	 //   $.getJSON("example.json", function(data) {
	//   yourDATA = data;
	//   console.log(yourDATA.aProperty);
	// })

	//Use your data here
	//alert(yourDATA.aProperty);

	$.getJSON("example2.json", function(json) {
        console.log(json);
    });

}

function checkThePassword(){
	var head = document.getElementsByTagName('head');
	console.log(head);

}

function showWindow(url) {
    window.open(url, "_blank", "directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes");
}


// //get a reference to the element
// var myBtn = document.getElementById('myButton');

// //add event listener
// myBtn.addEventListener('click', function(event) {
// window.location.href='login.html';
// });

// var jqxhr;

// $.getJSON("example.json", function(data) {
//   jqxhr = data;
// });

// //MyFunction

// // alert(jqxhr.property);
// // caution: this won't work immediately on load, since the ajax call runs asynchronously and hasn't finished at that time

// // it should be available at a later time, like a click event
// $('a#something').click(function(){
//      if(jqxhr){
//           alert(jqxhr.property);
//      }else{
//           alert('getJSON not yet complete or failed');
//      }
// });


// $.getJSON("example.json", function(data) {
//   yourDATA = data;
// })

// //Use your data here
// alert(yourDATA.aProperty);