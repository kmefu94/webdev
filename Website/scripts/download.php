<?php
    function test($data){
        return $data+1;
    }

    if (isset($_POST['callFunc1'])) {
        echo test($_POST['callFunc1']);
    }
/*function download(){
var aClass = document.querySelector('.cover.active');
aClass.style.background = 'red';	


}
*/
?>