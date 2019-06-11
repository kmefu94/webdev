
window.onload = function(){
var option1 = document.getElementsByClassName('1');
var option2 = document.getElementsByClassName('2');
var option3 = document.getElementsByClassName('3');
var butt = document.getElementById('dOption');	
	butt.onclick =function(){
//generate different file downloads based on option chosen
	if($(option1).hasClass('active')){
		butt.href="projects/Calculator.jar";
	}
		else if($(option2).hasClass('active')){
		butt.href="projects/FileCount.jar";
	}
		else if($(option3).hasClass('active')){
		butt.href="projects/WebTech-master.zip";
	}
	else
	{
		alert('please pick an option');
		butt.href="#";
	}
}
}
