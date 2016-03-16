var members  = [];
var member   = {};
var curr = "";
var full = "";

document.getElementById("pledge").onclick = function() {
	member = {};
	document.getElementById("stats").style.visibility = "visible";
	member.name = document.getElementById("name").value; 
	member.pwd  = document.getElementById("password").value;
	member.eml  = document.getElementById("email").value;
	member.amt  = document.getElementById("amount").value;
	members.push(member);
	
	//alert(MakeMemberStats(members));
	
	document.getElementById("stats").innerHTML = MakeMemberStats(members);
}

function MakeMemberStats(m) {
	curr = "";
	full = "";
	for (i=0; i<m.length; i++) {
		//alert("txt for i value of " + i + " is--> " + m[i-1].name + " has pledged " + m[i-1].amt + ".<br>" );
		curr = (m[i].name + " has pledged  $" + m[i].amt + ".<br>");
		//alert("i=" + i + ". curr in loop ~~> " + curr);
		full = full + curr;
		//alert("i=" + i + ". full in loop ~~> " + full);
		
		/* SAVED SAMPLE THAT WORKED.
		alert("i = " + i);
		curr = "*";
		full = (full + curr + ",");
		alert("curr= " + curr);
		alert("full= " + full);
		*/
	}
	//alert("full outside of loop --> "+ full);
	return full;
}







/* USEFUL SNIPPETS 

var globe = true;

function Flip(b,a) {                    //pneumonic for before, after 
  var orig = document.getElementById("shoe-before").innerHTML;
  var aftr = document.getElementById("shoe-after").innerHTML;

  document.getElementById("shoe-before").innerHTML = aftr;
  document.getElementById("shoe-after").innerHTML = orig;
}

function Modit() {
  globe = (globe + 1) % 2;
  document.getElementById("messages").innerHTML = "globe is currently " + globe;
}

// save as an example 

function BtnMessage(b) {   //b pneumonic for "button name"
  if (b=="change") {
    alert("chay chay chay-eenj");
  }
  if (b=="snark") {
    alert("snark of fools");
  }
}
 
*/ 


