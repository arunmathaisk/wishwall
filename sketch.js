 
  
 
  
  

var database = firebase.database();


function fill_list()
{
	var ref = database.ref('wishes');
   ref.on('value',gotData);
	
}


function gotData(data) {
  var wishes = data.val();
  // Grab the keys to iterate over the object
  var keys = Object.keys(wishes);

  for (var i = keys.length-1; i>=0; i--) {
    var key = keys[i];
   
    var wish = wishes[key];
	console.log(wish.wish);
	
	var ul = document.getElementById("dynamic-list");
	    var li = document.createElement("li");
		li.setAttribute("class","list-group-item");
    li.appendChild(document.createTextNode(wish.wish));
    ul.appendChild(li);

  }
}


function submit_wish()
{ 


	
	var userInput = document.getElementById("usertextinput").value;
	var x="";
	if(userInput==x)
	{     
		
		alert("This Field Can Not Be Submitted Empty");
		history.go(0);
	}
	else{
	document.getElementById("usertextinput").value="";


var ref = database.ref('wishes');

var data = {
  wish: userInput
  }
   ref.push(data,finished);
 function finished(error) {
  if (error) {
    console.log('ooops');
  } else {
    console.log('data saved!');
  }
 }
	history.go(0);}

}
	
