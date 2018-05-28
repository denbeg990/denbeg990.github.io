function hamMeny(x) {
    x.classList.toggle("change");
}
var i = true;
function openMeny()
{
	
	if (i == true) 
	{
		document.getElementById("navcontent").style.display = "block";
		i = false;
	}
	else
	{
		document.getElementById("navcontent").style.display = "none";
		i = true;
	}
	
}