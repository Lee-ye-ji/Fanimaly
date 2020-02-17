$(document).ready(function() {
    $("#tab1 ,#tab2 ,#tab3, #tab4 , #tab5, #tab6").hide(); // Initially hide all content
    $("#bm1 ,#bm2 ,#bm3").hide(); //Hide all content

    $('#toplogo , #topname').click(function(e) {
        e.preventDefault();     
        $("#tab1 ,#tab2 ,#tab3, #tab4, #tab5, #tab6").hide(); // Initially hide all content
        $("#bm1 ,#bm2 ,#bm3").hide(); //Hide all content
        $("#photo , #bottomMenu, .namemeaning").fadeIn(); // Show content for current tab
        $(".menulink").css("background-color","yellow");
        $(".menulink").css("color","black");
        $(".bmenulinkd").css("background-color","yellow");
        $(".bmenulinkd").css("color","black");
    });

     $('#tabs a').click(function(e) {
        e.preventDefault();  
        $("#photo , #bottomMenu, .namemeaning").hide(); //Hide all content      
        $("#tab1 ,#tab2 ,#tab3, #tab4 , #tab5, #tab6").hide(); //Hide all content
        $("#bm1 ,#bm2 ,#bm3").hide(); //Hide all content
        $('#' + $(this).attr('name')).fadeIn(); // Show content for current tab
        // $('#' + $(this).attr('name')).unbind('mouseenter mouseleave');
        $(".menulink").css("background-color","yellow");
        $(".menulink").css("color","black");
        $(this).css("background-color", "rgb(152, 115, 71)");
        $(this).css("color", "white");
        
    });
    $('#bottomMenu a').click(function(e){
        $("#photo , .namemeaning").hide(); //Hide all content  
        $("#bm1 ,#bm2 ,#bm3").hide(); //Hide all content
        $('#' + $(this).attr('name')).fadeIn(); // Show content for current tab
        $(".bmenulinkd").css("background-color","yellow");
        $(".bmenulinkd").css("color","black");
        $(this).css("background-color", "rgb(152, 115, 71)");
        $(this).css("color", "white");
    });
   
})();




