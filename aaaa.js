function changePics(num){
    var x = document.getElementsByTagName('img');
    for(i = x.length-1; i >= 0; i--)
    {
        x[i].src = i+num+".jpg";
    }
}
/*

function changePics(num)
{
	var text = "<figure class='parallax-window' data-parallax='scroll' data-image-src=" + num + ".jpg data-speed='0.05'>" + "<figure class='parallax-window' data-parallax='scroll' data-image-src=" + ++num + ".jpg data-speed='0.05'>" + "<figure class='parallax-window' data-parallax='scroll' data-image-src=" + ++num +".jpg data-speed='0.05'>" + "<figure class='parallax-window' data-parallax='scroll' data-image-src=" + ++num +".jpg data-speed='0.05'>";
	//alert(text);
	document.getElementById('kropp').innerHTML = text;
}
*/
