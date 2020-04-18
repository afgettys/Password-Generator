var length = Number(prompt("Please indicate length for your password"))
while (isNaN(length)|| length <8 || length > 128); 
length = Number(prompt("Please choose between 8 and 128"));

var uppers = confirm("Should add uppercase letters?");
var lowers = confirm("Should add lowercase letters?");
var numbers = confirm("Should add numbers?");
var symbols = confirm("Should add special characters?");

while(!uppers && !lowers && !numbers && !symbols){
    alert("Please select at least one character");
    uppers = confirm("Should add uppercase letters?");
    lowers = confirm("Should add lowercase letters?");
    numbers = confirm("Should add numbers?");
    symbols = confirm("Should add special characters?");
}

window.addEventListener('load',function(){
    generateNewPassword();
});

function generateNewPassword(){
    var password = " ";

    var allowed = {}
    if(uppers)password+= Rando (allowed.uppers ="ABCEFEHGUT");
    if(lowers)password+= Rando (allowed.lowers = "ahshfhfkalfjf");
    if(numbers)password+=rando(allowed.numbers ="1234567890");
    if(symbols)password+=rando(allowed.symbols = "@#$%^&();>/*");

    for (var i= password.length; i<length; i++) password += rando(rando(allowed).value);

    document.getElementById("password").value = randoSequence(password).join("");
}