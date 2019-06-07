//radio button functionality in div
$(document).ready(
function()
    {
        $(".cover").click(
            function(event)
        {
            $(".cover.active").not(this).removeClass("active");
            $(this).toggleClass("active");
        }
        );
    });