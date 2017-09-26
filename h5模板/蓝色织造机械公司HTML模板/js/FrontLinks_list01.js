var FrontLinks_list01 = {


//浏览次数加1
/**参数说明：
	linkId:链接ID		
**/

setClickTimes:function(linkId){
		
	$.post("/FrontLinks.do", "method=setClickTimes&linkId="+linkId);	
	
}
}
