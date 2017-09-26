var FrontProducts_list01 = {

	/*
    *	改变排列方
    *	参数1：下拉列表对象
    *	参数2：formID
    *	参数3：跳转连接
    */
	changeOrderby:function (dom,formID,hrefPage){
		//alert("href="+href);
		//alert("formID="+formID);
		//alert("actionURL="+actionURL);
		var order_str = dom.value;
		var theForm = document.getElementById(formID);
		theForm.orderby.value = order_str;
		try{
			//高级搜索方式没有这个值
			theForm.action_page.value = hrefPage;
		}catch(e){
		}
		theForm.submit();
	},

	/*
    *	改变排列方
    *	参数1：值（下拉列表对象、input输入框）
    *	参数2：formID
    *	参数3：跳转连接
    */
	changeOrderby2:function (dom,formID,hrefPage){
		//alert("href="+href);
		//alert("formID="+formID);
		//alert("actionURL="+actionURL);
		var order_str = dom;
		var theForm = document.getElementById(formID);
		theForm.orderby.value = order_str;
		try{
			//高级搜索方式没有这个值
			theForm.action_page.value = hrefPage;
		}catch(e){
		}
		theForm.submit();
	},

	/*
	*	切换显示方式
    *	参数1：viewPageID
    *	参数2：formID
    *	参数3：跳转连接
	*/
	changeView:function (viewPageID,formID,hrefPage){

		var theForm = document.getElementById(formID);

		theForm.spType.value = viewPageID;
		try{
			theForm.action_page.value = hrefPage;
		}catch(e){
		}
		theForm.submit();
	},


	/*
	*	分会员级别显示价格
	*	参数1：隐藏域name
	*/
	loadMemberLevelID:function (elmentName){
		var memberlvid = document.getElementsByName(elmentName);
		var cookieString = document.cookie;

		var starIndex = cookieString.indexOf('c_memberInfo=');
		if(starIndex ==-1){
			for(var i=0; i< memberlvid.length ;i++){
				memberlvid[i].parentNode.style.display="none";
			}
			return;
		}

		var endIndex = cookieString.indexOf(';',starIndex);
		if(endIndex == -1){
			endIndex=cookieString.length;
		}
		starIndex = 'c_memberInfo'.length+1+starIndex;
        var cookieContent = unescape(cookieString.substring(starIndex,endIndex));
        for(var i=0; i<memberlvid.length;i++){
			if(memberlvid[i].value!=cookieContent){
				memberlvid[i].parentNode.style.display="none";
			}else{
				memberlvid[i].parentNode.style.display="block";
			}
		}
	},

	/*
	*	询价按钮
	*	参数1：询价url
	*	参数2：弹出与否标示
	*/
	toPrice:function(pagehref,targetOpen){
		if(targetOpen=='_blank'){
			window.open(pagehref);
		} else if(targetOpen=='_self'){
			document.location.href = pagehref;
		} else {
			document.location.href = pagehref;
		}
	}
}