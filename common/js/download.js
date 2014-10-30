	/**
 * 软件下载页面js
 * @return {[type]} [description]
 */
$(document).ready(function(){
	$(".btn-bottom li").click(function(){
		var lid=$(this).index();
		var url_0='http://pan.baidu.com/s/1i3sZWxf';
		var url_1='http://pan.baidu.com/s/1i3sZWxf';
		var url_2='http://pan.baidu.com/s/1i3sZWxf';
		var url_3='http://pan.baidu.com/s/1i3sZWxf';
		var popWidth=$(window).width()-100;
		var popHeight=$(window).height()-40;
		var leftWidth='-'+Math.floor(popWidth/2);
		var leftHeight='-'+Math.floor(popHeight/2);
		var frameWidth=popWidth;
		var frameHeight=popHeight-36;
		$(".pop").css({
			"width":+popWidth,
			"height":+popHeight,
			"margin-left":+leftWidth,
			"margin-top":+leftHeight,
			"top":"50%",
			"padding":"5px",
			"background-color":"#FFF"
		});
		$(".pop").fadeIn(200);
		if (lid==0) {
			$("#bdownload").attr('src',url_0);
		} else if(lid==1){
			$("#bdownload").attr('src',url_1);
		}else if(lid==2){
			$("#bdownload").attr('src',url_2);
		}else if(lid==3){
			$("#bdownload").attr('src',url_3);
		}
		$("#bdownload").css({
			"width":+frameWidth,
			"height":+frameHeight,
			"border":"1px solid #ddd"
		});
	});
	$(".db_d_close").click(function(){
		$(".pop").fadeOut(300);
	})
})