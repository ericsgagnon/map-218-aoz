// function loadJSON(filePath, success, error) 
// { 
// 	var xhr = new XMLHttpRequest(); 
// 	xhr.onreadystatechange = function() 
// 	{ 
// 		if (xhr.readyState === XMLHttpRequest.DONE) { 
// 			if (xhr.status === 200) { 
// 				if (success) 
// 					success(JSON.parse(xhr.responseText)); 
// 		} else { 
// 			if (error) 
// 				error(xhr); 
// 			} 
// 		} 
// 	}; 
// 	xhr.open("GET", filePath, true); 
// 	xhr.send(); 
// } 

function loadJSON(filePath, callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', filePath, true); // Replace 'my_data' with the path to your file
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
    // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
    callback(xobj.responseText);
    }
  };
  xobj.send(null);
}