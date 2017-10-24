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


function showWindow(url) {
    window.open(url, "_blank", "directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes");
}

// function runThis() {
//  loadJSON(function(response) {
//   // Parse JSON string into object
//     var actual_JSON = JSON.parse(response);
//     console.log(actual_JSON);
//  });
// }


// function loadJSON(callback) {   

//     var xobj = new XMLHttpRequest();

//     xobj.overrideMimeType("application/json");
//     xobj.open('GET', 'example.json', true); // Replace 'my_data' with the path to your file

//     xobj.onreadystatechange = function () {
//           if (xobj.readyState == 4 && xobj.status == "200") {
//             // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//             callback(xobj.responseText);
//           }
//     };
//     xobj.send(null);  
//  }