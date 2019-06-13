$(function(){
	var n=0;
	var pos=0;
	var w=2000;

	$(".controller li").click(function(e){
		e.preventDefault();
		$(".controller li").removeClass("on");
		$(this).addClass("on");
		n=$(this).index();
		pos=n*w*-1;
		
		$(".picture").css({"left":-1000+pos});
	});
	
	$(".next").click(function(e){
		e.preventDefault();
		if(n == 8) return false;
		n=n+1;
		pos=(-1)*w*n;
		
		$(".picture").css({"left":-1000+pos});
		$(".controller li").removeClass("on");
		$(".controller li").eq(n).addClass("on");
	});
	
	$(".prev").click(function(e){
		e.preventDefault();

		if(n == 0) return false;
		n=n-1;
		pos=pos+2000;
		$(".picture").css({"left":-1000+pos});
		$(".controller li").removeClass("on");
		$(".controller li").eq(n).addClass("on");
	});
	
});



