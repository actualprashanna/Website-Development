function GEEKFORGEEKS()
{
var name = document.forms["RegForm"]["Name"];
var email = document.forms["RegForm"]["EMail"];
var address = document.forms["RegForm"]["Address"];
var what =  document.forms["RegForm"]["Country"];
var password = document.forms["RegForm"]["Address2"];
var city = document.forms["RegForm"]["City"];
var zip = document.forms["RegForm"]["Zip"];
var check = document.forms["RegForm"]["Check"];

if (name.value == "")
{
window.alert("Please enter your name.");
name.focus();
return false;
}

if (email.value == "")
{
window.alert("Please enter a valid e-mail address.");
email.focus();
return false;
}

if (email.value.indexOf("@", 0) < 0)
{
window.alert("Please enter a valid e-mail address.");
email.focus();
return false;
}

if (email.value.indexOf(".", 0) < 0)
{
window.alert("Please enter a valid e-mail address.");
email.focus();
return false;
}
if (address.value == "")
{
window.alert("Please enter your address.");
name.focus();
return false;
}
if (password.value == "")
{
window.alert("Please enter Address2");
password.focus();
return false;
}
if (city.value == "")
{
window.alert("Please enter the city you live in");
city.focus();
return false;
}

if (what.selectedIndex < 1)
{
alert("Please enter your country.");
what.focus();
return false;
}


if (zip.value == "")
{
window.alert("Please enter your ZIP CODE.");
zip.focus();
return false;
}

if (check.value == "")
{
window.alert("Please read the Terms and Conditions and Check the box.");
check.focus();
return false;
}




return true;
}