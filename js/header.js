$(function(){
	var winTop=0;
	var topTimer=0;
	$(window).scroll(function(){
		topTimer=setTimeout(function(){
			clearTimeout(topTimer);
			winTop=$(window).scrollTop();
		},50);
		if(winTop>199){
			$(".top_menu").css({"position":"fixed", "top":0, "left":0, "z-index":"9999", "width":"100%"})
		}
		else{
			$(".top_menu").css({"position":"static"});
		}
	});
	var clickStatusCtab="";
	$(".country_tab").click(function(e){
		e.preventDefault();
		clickStatusCtab=e.type;
		if($(".country ul").hasClass("open")==false){
			$(".country ul").addClass("open");
			$(".country ul").slideDown(300);
		}
		else{
			$(".country ul").removeClass("open");
			$(".country ul").slideUp(300);
		}
	});
	$(".country_tab").focusin(function(e){
		setTimeout(function(){
			if(clickStatusCtab=="click"){
				clickStatusCtab="";
				return false;
			}
			$(".country ul").slideDown(300);
		},100);
	});
	$(".country ul li:last-child a").focusout(function(){
		$(".country ul").slideUp(300);
	});
	$(".member_menu>ul>li:last-child>a").focusin(function(){
		$(this).next("ul").css({"display":"block"});
	});
	$(".member_menu ul ul li:last-child a").focusout(function(){
		$(".member_menu ul ul").css({"display":"none"});
	});
	
	var clickStatusTab="";
	$(".tab a").click(function(e){
		e.preventDefault();
		clickStatusTab=e.type;
		if($(".tab").hasClass("close")==false){
			$(".tab").addClass("close");
			$(".tab_menu").slideDown(300);
		}
		else{
			$(".tab").removeClass("close");
			$(".tab_menu").slideUp(300);
		}
		
	});
	$(".tab a").focusin(function(e){
		setTimeout(function(){
			if(clickStatusTab=="click"){
				clickStatusTab="";
				return false;
			}
			$(".tab").addClass("close");
			$(".tab_menu").slideDown(300);
		},100);
	});
	$(".tab a").focusout(function(){
		$(".brand>li:first-child>a").focus();
	});
	$(".banner li:last-child").focusout(function(){
		$(".main_menu>ul>li:first-child>a").focus();
		$(".tab").removeClass("close");
		$(".tab_menu").slideUp(300);
	});
	$(".main_menu>ul>li").hover(
		function(){
			if($(".tab").hasClass("close")){
				return false;
			}
			$(this).find("ul").stop().slideDown(300);
		},
		function(){
			$(this).find("ul").stop().slideUp(300);
		}
	);
	$(".main_menu>ul>li>a").focusin(function(){
		$(this).next("ul").slideDown(300);
	});
	$(".main_menu ul ul li:last-child a").focusout(function(){
		$(this).parent().parent().slideUp(300);
	});
	$(".footer a").click(function(e){
		e.preventDefault();
	});
});