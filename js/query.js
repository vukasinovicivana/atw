$(document).ready(function() { 

	
	var nizSlike=['img/slajder1.jpg','img/slajder2.jpg','img/slajder4.jpg',];
	 
	function promeniSliku(){
			for(var i = 0; i<nizSlike.length; i++){
				(function(ind){
					setTimeout(function(){
						$("#slajder").css('background-image', "url('" + nizSlike[ind] + "')");
				}, 4000*ind)})(i);
				 
			}
	}

	promeniSliku()
	setInterval(function(){
	promeniSliku()},3000*nizSlike.length);
	
	//malodugme
	
	$(".tekstClanak").hide();
	$(".maloDugme").click(function(){
        if($(this).prev().is(':visible')) { 
            $(this).prev().slideUp("slow");
            $(this).text("Više");
        } else {
            $(this).prev().slideDown("slow");
            $(this).text("Manje");
            }         
    }); 
	
    //taster rezervisi
	
	$(".taster").hover(function(){
        $(this).css({color:"black", cursor:"pointer"});
        $(this).css({backgroundColor:"white"});
    },
    function(){
        $(this).css({color:"white"});
        $(this).css({backgroundColor:"black"});
    });
	
	
	
	
	
	
	
	
	
	
	
	
});