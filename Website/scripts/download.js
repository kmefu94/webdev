
function clicked(){
	var option = document.getElementsByClassName('cover');
	var selection = document.getElementsByClassName('active');
if($(option).hasClass('active') == false)
{
	alert('Please select an option');
}
if($(selection).hasClass('1') == true)
{
$.ajax({
	url: 'download.php',
	type: 'post',
 	 data : {
            'callFunc1' : '1'
        },
        success: function(response) { console.log(response); },
        error : function(request,error)
        {
            alert("Request: failed");
        }
    });	
}
if($(selection).hasClass('2') == true)
{
	alert('2');
	}
if($(selection).hasClass('3') == true)
{
alert('3');	
}
}

/*
/*$.ajax({
	url:"path";
	data: {

	}
})*/