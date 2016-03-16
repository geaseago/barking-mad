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
 


