function hamMeny(x) {
    x.classList.toggle("change");
}

function openMeny()
{
	var i = 0;
	if (i == 0) 
	{
		document.getElementById("navcontent").style.display = "block";
		i = 1;
	}
	else
	{
		document.getElementById("navcontent").style.display = "none";
		i = 0;
	}
	
}