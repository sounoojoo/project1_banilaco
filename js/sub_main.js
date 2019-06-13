$(function(){
	$(".prod_btn li").click(function(){
		$(".prod_btn li a").css({"font-weight":"300", "color":"#565656"});
		$(this).children("a").css({"font-weight":"400", "color":"#000"});
	});
	$(".prod_btn li").focusin(function(){
		$(".prod_btn li a").css({"font-weight":"300", "color":"#565656"});
		$(this).children("a").css({"font-weight":"400", "color":"#000"});
	});
	var categoryImg1=new Array();
	categoryImg1[0]='images/all_n_over.png';
	categoryImg1[1]='images/skincare_n_over.png';
	categoryImg1[2]='images/cleansing_n_over.png';
	categoryImg1[3]='images/bodycare_n_over.png';
	categoryImg1[4]='images/mask_n_over.png';
	categoryImg1[5]='images/etc_n_over.png';
	
	var categoryImg2=new Array();
	categoryImg2[0]='images/all_over.png';
	categoryImg2[1]='images/skincare_over.png';
	categoryImg2[2]='images/cleansing_over.png';
	categoryImg2[3]='images/bodycare_over.png';
	categoryImg2[4]='images/mask_over.png';
	categoryImg2[5]='images/etc_over.png';
	
	var n=0;
	
	$(".category_inner li").eq(n).find("a").css({"background":'url("'+categoryImg2[n]+'")'});
	$(".category_inner li").click(function(e){
		e.preventDefault();
		n=$(this).index();
		for(var i=0; i<$(".category_inner li").length; i++){
			$(".category_inner li").eq(i).find("a").css({"background":'url("'+categoryImg1[i]+'")'});
		}
		$(this).find("a").css({"background":'url("'+categoryImg2[n]+'")'});
	});
	$(".category_inner li a").focusin(function(){
		n=$(this).parent().index();
		for(var i=0; i<$(".category_inner li").length; i++){
			$(".category_inner li").eq(i).find("a").css({"background":'url("'+categoryImg1[i]+'")'});
		}
		$(this).css({"background":'url("'+categoryImg2[n]+'")'});
	});
	$(".category_inner .all").click(function(e){
		e.preventDefault();
		$(".product>li.all").show();
	});
	$(".category_inner .all").focusin(function(){
		$(".product>li.all").show();
	});
	$(".category_inner .skincare").click(function(e){
		e.preventDefault();
		$(".product>li.all").hide();
		$(".product>li.skin").show();
	});
	$(".category_inner .skincare").focusin(function(){
		$(".product>li.all").hide();
		$(".product>li.skin").show();
	});
	$(".category_inner .cleanser").click(function(e){
		e.preventDefault();
		$(".product>li.all").hide();
		$(".product>li.clean").show();
	});
	$(".category_inner .cleanser").focusin(function(){
		$(".product>li.all").hide();
		$(".product>li.clean").show();
	});
	$(".category_inner .bodycare").click(function(e){
		e.preventDefault();
		$(".product>li.all").hide();
		$(".product>li.body").show();
	});
	$(".category_inner .bodycare").focusin(function(){
		$(".product>li.all").hide();
		$(".product>li.body").show();
	});
	$(".category_inner .packmask").click(function(e){
		e.preventDefault();
		$(".product>li.all").hide();
		$(".product>li.mask").show();
	});
	$(".category_inner .packmask").focusin(function(){
		$(".product>li.all").hide();
		$(".product>li.mask").show();
	});
	$(".category_inner .etc").click(function(e){
		e.preventDefault();
		$(".product>li.all").hide();
		$(".product>li.etc").show();
	});
	$(".category_inner .etc").focusin(function(){
		$(".product>li.all").hide();
		$(".product>li.etc").show();
	});
	$(".prod_btn ul li").eq(3).click(function(e){
		e.preventDefault();
		$(".product>li.all").hide();
		$(".product>li.sale").show();
	});
	$(".prod_btn ul li").eq(3).find("a").focusin(function(){
		$(".product>li.all").hide();
		$(".product>li.sale").show();
	});
	$(".prod_btn ul li").eq(4).click(function(e){
		e.preventDefault();
		$(".product>li.all").hide();
		$(".product>li.gift").show();
	});
	$(".prod_btn ul li").eq(4).find("a").focusin(function(){
		$(".product>li.all").hide();
		$(".product>li.gift").show();
	});
	$(".prod_btn ul li").eq(0).click(function(e){
		e.preventDefault();
		$(".product>li.all").show();
	});
	$(".prod_btn ul li").eq(1).click(function(e){
		e.preventDefault();
		$(".product>li.all").show();
	});
	$(".prod_btn ul li").eq(2).click(function(e){
		e.preventDefault();
		$(".product>li.all").show();
	});
});



