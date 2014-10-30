/**
 * 首页ajax加载代码
 * @return {[type]} [description]
 */
$("#myTab_Content0").load('content0.html');
	$("#myTab li").click(function(){
		var id=$(this).index();
		$("#myTab_Content"+id).html("<div class='loading'><img src='common/images/loading.gif'/></div>");
		if (id==3) {
			$.ajax({
				url:'manual/index.html',
				cache:false,//不缓存ajax请求数据
				success:function(response,xhr){
	                $("#myTab_Content3").html(response);
	            }
			})
		}else{
			$.ajax({
				url:'content'+id+'.html',
				cache:false,//不缓存ajax请求数据
				success:function(response,xhr){
	                $("#myTab_Content"+id).html(response);
	            }
			})
		}
	});
	 $(window).scroll(function(){
        var a = 50;
        if ($(window).scrollTop()>a) {
            $("#aside-menu").addClass('fixed');
        }else{
            $("#aside-menu").removeClass('fixed');
        }
    });
//获取当前窗口大小，重置#layout和#aside-menu 的width和height
	//$("#myTab_Content3").height($(window).height()-30);
function resize_window(){
	}
	$(function(){
	  resize_window();
	  $(window).resize(function(){
	    resize_window();
	  })
	});
/**
 * 使用手册别墅处理块
 * @return {[type]} [description]
 */
	$(function(){
		$("#block3").click(function(){
			 $("#aside-menu").animate( { width: 0}, 200 );
		});
	})
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
			$("#bdownload").css("width",+frameWidth);
			$("#bdownload").css("height",+frameHeight);
			$("#bdownload").css("border","1px solid #ddd");
			
		});
$(".db_d_close").click(function(){
	$(".pop").fadeOut(300);
})
	})
