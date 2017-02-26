$(function(){
var num=0;
$(".bg-white").mouseover(function(){
	$(this).addClass("hover");
	})
$(".aaa").mouseover(function(){
	$(this).addClass("hover");
	})
$(".bg-white").mouseout(function(){
	$(this).removeClass("hover");
	})
$("#top-banner span").mouseover(function(){
	$(this).css("background","#000")
	})	
$("#top-banner span").click(function(){
	$("#top-banner").fadeOut();
	})
$(".main-title").mouseover(function(){
	var index=$(this).index();
	$(".sub-area").eq(index).addClass("hover");
	var sub=parseInt($(".sub-area").eq(index).css("height"));
	if(sub<430)
	$(".sub-area").eq(index).css("height","430px");
	})
$(".main-title").mouseout(function(){
	var index=$(this).index();
	$(".sub-area").eq(index).removeClass("hover");
	})
	
	$("#focus-page li").mouseover(function (){
			var index=$(this).index();
			for(var i=0;i<6;i++){
				if(i==index){
					$("#focus-page li").eq(i).css("background","red")
					$("#focus-pic li").eq(i).animate({"opacity":1},200); 
					num=index;
				}else{
					$("#focus-page li").eq(i).css("background","#000")
					$("#focus-pic li").eq(i).css("opacity",0);
					num=index;
				}
			}
		})
		$("#focus-left").click(function(){
			if(num==0){num=5}
				else{num--}
			for(var i=0;i<6;i++){
				if(i==num){
				$("#focus-page li").eq(num).css("background","red")
				$("#focus-pic li").eq(num).animate({"opacity":1},200); 
			}else{
					$("#focus-page li").eq(i).css("background","#000")
					$("#focus-pic li").eq(i).css("opacity",0);
				}
			}	
		})
		$("#focus-right").click(function(){
			if(num==5){num=0}
				else{num++}
			for(var i=0;i<6;i++){
				if(i==num){
				$("#focus-page li").eq(num).css("background","red")
				$("#focus-pic li").eq(num).animate({"opacity":1},200); 
			}else{
					$("#focus-page li").eq(i).css("background","#000")
					$("#focus-pic li").eq(i).css("opacity",0);
				}
			}	
		})

$(".news1 li").mouseenter(function(){
	$(".news2").hide();
	$(".news1").animate({"top":"-40px"},400)
	})
$("#news-bottom").mouseleave(function(){
	$(".news1").animate({"top":"0px"},600,function(){
	$(".news2").show();})
	})
$(".bar1").mouseenter(function(){
	$(this).addClass("hover")
	$(this).find(".bar2").css({"background":"#c81623","right":"20px"}).show().animate({"right":"40px"},200,function(){
		$(this).show();
		})
	})
$(".bar1").mouseleave(function(){
	$(this).removeClass("hover")
	$(this).find(".bar2").css("background","#7a6e6e").animate({"right":"0px"},100,function(){
	$(this).hide()
		})
	})
$("#search-button").click(function(){
	$.ajax({
	type:"GET",
	url:"index.php",
	dataType:"json",
	success:function(data){
	alert(1)},
	error:function(data){
	alert(data.statusText)},
		})
	})

$(".shop-list li").mouseover(function(){
	var j=$(this).index();
	for(var i=0;i<9;i++){
		if(i==j){
		$(".shop-center-side li").eq(j).show()
			}else{
				$(".shop-center-side li").eq(i).hide()
			}
		}
	})

$(".jd-right").click(function(){
	if($(".jd-ad-list").css("left")=="-3000px"){
	$(".jd-ad-list").css("left","0px")
		}
	$(".jd-ad-list").animate({"left":"-=1000px"},500);
	
	})
$(".jd-left").click(function(){
	if($(".jd-ad-list").css("left")=="0px"){
	$(".jd-ad-list").css("left","-3000px")
		}
	$(".jd-ad-list").animate({"left":"+=1000px"},500);
	})
})