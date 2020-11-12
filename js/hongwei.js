// JavaScript Document


// 

$(function(){
	$("a[href*=#]:not([href=#])").click(function(){
		
		var target = $($(this).attr("href")).offset().top;
		
		$("html,body").animate({scrollTop:target},500);
		
		return false;
		
		});
	});
	
// nav

$(function(){
	
	$(window).scroll(function(){
		
		if($(window).scrollTop()>70){
			
			$("header").addClass("small");
			$("nav").addClass("small");	
			$(".logo").addClass("small");	
						
			}else{
				
			$("header").removeClass("small");
			$("nav").removeClass("small");	
			$(".logo").removeClass("small");					

				}
		
		});
	
	});	