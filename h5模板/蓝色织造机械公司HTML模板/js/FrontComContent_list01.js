var FrontComContent_list01={
	//交替显示或隐藏通用内容列表，compId：组件实例名标识
	alternate : function(compId) {
     $("#"+compId+" h5").each(function(i){
				$(this).toggle(
				  function () {
				    $("#"+compId+"UL"+i).hide();
						$(this).find(":first-child").attr("src", "../../images/comcontent/2.jpg");
				  },
				  function () {
				    $("#"+compId+"UL"+i).show();
						$(this).find(":first-child").attr("src", "../../images/comcontent/1.jpg");
				  }
				);
		 })
  },

	getUrlParam:function(name){	//获取URL参数
      var   reg   =   new   RegExp("(^|&)"+   name   +"=([^&]*)(&|$)");
      var   r   =   window.location.toString().match(reg);
      if   (r!=null)   return   unescape(r[2]);   return   null;
  },

	//扩展样式1显示分类时的事件处理
	d1extContainCategoryAlternate : function(compId) {
		//设置当前组件实例展开的分类及内容项
		var curComcontentIds = this.getUrlParam(compId+"CurrentIds");
		var categoryId = "";
		if(curComcontentIds != null){
			var pos = curComcontentIds.indexOf("__");
			categoryId = "comContent_" + curComcontentIds.substring(0, pos);
			contId = curComcontentIds.substring(pos+2);
			$("#"+compId+" #comContent_"+contId).addClass("current");
		}else{
			categoryId = $("#"+compId+" .menu-first ul li:first a:first").attr("id");
			contId = $("#"+compId+" .menu-first ul li:first ul li:first a").attr("id");
			$("#"+compId+" #"+contId).addClass("current");
		}

		$("#"+compId+" #"+categoryId).addClass("current");
		$("#"+compId+" #"+categoryId+"_second").show();

		$("#"+compId+" .menu-first ul li a.menu-text1").click(function(){
			if($(this).attr("id") == categoryId){
				if(!$(this).parent().hasClass("menu-none")){
					if($("#"+compId+" #"+categoryId+"_second").is( ":hidden")){
						$(this).removeClass("current2");
						$(this).addClass("current");
						$("#"+compId+" #"+categoryId+"_second").show();
					}else{
						$(this).removeClass("current");
						$(this).addClass("current2");
						$("#"+compId+" #"+categoryId+"_second").hide();
					}
				}
			}else{
				$("#"+compId+" #"+categoryId).removeClass("current current2");
				if(!$("#"+compId+" #"+categoryId).parent().hasClass("menu-none")){
					$("#"+compId+" #"+categoryId+"_second").hide();
				}

				$(this).addClass("current");
				categoryId = $(this).attr("id");

				if(!$(this).parent().hasClass("menu-none")){
					if(!$("#"+compId+" #"+categoryId+"_second").find("a").hasClass("current")){
						$("#"+compId+" #"+categoryId+"_second").find("a:first").addClass("current");
					}
					$("#"+compId+" #"+categoryId+"_second").show();
				}
			}
		});

		$("#"+compId+" .menu-second ul li a.menu-text2").click(function(){
			$(this).parent().parent().find("a").removeClass("current");
			$(this).addClass("current");
		});
	},

	//扩展样式1不显示分类时的事件处理
	d1extNoContainCategoryAlternate : function(compId) {
		var contId = this.getUrlParam(compId+"ContId");
		if(contId==null){
			$("#"+compId+" .menu-first ul li:first a").addClass("current");
		}else{
			$("#"+compId+" #comContent_"+contId).addClass("current");
		}
		$("#"+compId+" .menu-first ul li a.menu-text1").click(function(){
			$("#"+compId+" .menu-first ul li a.menu-text1").removeClass("current");
			$(this).addClass("current");
		});
	}
}


