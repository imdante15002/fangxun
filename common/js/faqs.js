$(document).ready(function(){
	/**
	 * 常见问题弹出js窗口
	 * @return {[type]} [description]
	 */
	 $(".col-4 a").click(function(){
	 	var id=$(this).attr('id');
	 	var viewWidth=$(window).width()-175;
	 	$(".dialog").html("<div class='loading'><img src='common/images/loading.gif'/></div>");
		$.ajax({
			url:'manual/doc/'+id+'.html',
			cache:false,//不缓存ajax请求数据
			success:function(response,xhr){
                $(".dialog").html(response);
            }
		});
		$("#dialog").css('width',viewWidth);
		$("#dialog").fadeIn(200);
	 });
	 $(".faqs li").click(function(){
	 	$(this).addClass('active').siblings(this).removeClass('active');
	 });
/**
 * 关闭弹出窗口dialog
 */
	$(".cls_dialog").click(function(){
		$("#dialog").fadeOut(300);
	});
/**
 * 关于我们的服务
 */
$(".col-3 a").click(function(){
	 	var id=$(this).attr('id');
	 	var viewWidth=$(window).width()-175;
	 	$(".dialog").html("<div class='loading1'></div>");
		$.ajax({
			url:'faqs/'+id+'.html',
			cache:false,//不缓存ajax请求数据
			success:function(response,xhr){
                $(".dialog").html(response);
            }
		});
		$("#dialog").css('width',viewWidth);
		$("#dialog").fadeIn(200);
	 });
});

