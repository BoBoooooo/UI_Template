function tab(id){
	var selector="#"+id;
	var $layout=$(selector);
	if($layout.size()==0)
		return;

	var containerContent = $layout.children("div[class=containerContent]");
	if(containerContent.size()>0){		
		selector+=">div[class=containerContent]";	
	}else{
		var border = $layout.children("div[class^=border_]");
		if(border.size()>0)		
			selector+=" div[class=containerContent]:first";	
	}
	
	var eventType="click";
	$tabHead=$(selector+">ul>li");
	var layoutClass=$layout.attr("class");
	if(layoutClass && layoutClass.indexOf("_mouseover")!=-1){
		eventType="mouseover";
		$tabHead.click(function(e){e.preventDefault();});
	}
	
	$tabHead.bind(eventType,function(e){
		e.preventDefault();

		if(!$("#"+id).hasClass("tabboxId")){
			$("#"+id).addClass("tabboxId");
		}

		if(!$(this).parent().hasClass("tabhead"))
			$(this).parent().addClass("tabhead");
		
		//tab
		$(selector+">ul>li").attr("class","MultiPageTab_link");
		$(this).attr("class","MultiPageTab_hover");
		
		//content area
		var i=$(selector+">ul>li").index($(this));
		$(selector+">div[class!=clear]").attr("class","tabArea_b").eq(i).attr("class","tabArea_a");
	});	
	
	$(selector+">ul>li").eq(0).trigger(eventType);
}