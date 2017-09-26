var FrontPublic_totalSearch01={
    
    /**
	 * 功能 : 获取单选框的值
	 * 参数 : radioObj--单选框对象name值          
	*/
    getRadioValue:function(radioObj){
        
        var i=0;
        var radioName=document.getElementsByName(radioObj);
        
        if(radioName!=null){
           for (i=0; i<radioName.length; i++){
              if (radioName[i].checked){
                 return radioName[i].value;
                 break;
              }           
           }
        }
   
       // if (selectedIndex < 0){
       //    alert("您没有选择任何项");
       //  }
    },
    
    /**
	 * 功能 : 获取搜索分类的表现形式，下拉框or单选框
	 * 参数 : compId--组件Id          
	*/
    getSearchModel:function(compId){
        if(document.getElementById(compId+"searchModel")){
          // alert("下拉框");
           return document.getElementById(compId+"searchModel").value;
          
        }else{
          // alert("单选框");
           return this.getRadioValue("radioSearchModel");
        }
    },
    
    /**
	 * 功能 : 搜索产品
	 * 参数 : compId--组件Id    
	 *       productpage--商品搜索结果页面
	 *       infopage--资讯搜索搜索结果页面
	 *       offerpage--职位搜索结果页面
	 *       downpage--下载搜索结果页面     
	*/
    toSearch:function(compId,productpage,infopage,offerpage,downpage,keywordtips){
        var searchModel = this.getSearchModel(compId);                                      
        var compkeyWord = document.getElementById(compId+"keyWord");        
        var keyWord = trim(compkeyWord.value);       
        var keyWord1 = document.getElementById(compId+"keyWord1");
        
        if (keyWord==keywordtips){
                keyWord="";
            } 
        
	//判断搜索类别
	
        if(this.checkinput(compId,keywordtips)){
        
            if(searchModel=="product" ){	   
                document.getElementById(compId+"searchForm").action="/FrontProducts.do?method=submit";
                document.getElementById(compId+"action_page").value=productpage;      
                document.getElementById(compId+"keyWord1").name="keyword";    
                document.getElementById(compId+"searchType").value=1;
                document.getElementById(compId+"isMode").value="";
                keyWord1.value = keyWord;
                document.getElementById(compId+"searchForm").submit();
                //window.location.href=productpage;
                
            }else if(searchModel=="info"){
                document.getElementById(compId+"searchForm").action="/FrontNews.do?method=submit";        
                document.getElementById(compId+"action_page").value=infopage;   
                document.getElementById(compId+"keyWord1").name="newsKeyword";             
                document.getElementById(compId+"searchType").value="";    
                document.getElementById(compId+"isMode").value="";   
                keyWord1.value = encodeURIComponent(keyWord);
                document.getElementById(compId+"searchForm").submit();
            }else if(searchModel=="offer"){ 
                keyWord1.value = encodeURIComponent(keyWord);
                var offeraction=document.getElementById(compId+"offeraction").value;
                var url=offeraction.replace("keywordsparam",encodeURIComponent(keyWord1.value));
                             
                //document.getElementById(compId+"action_page").value=offerpage;
               // document.getElementById(compId+"keyWord1").name="keywords";
                //document.getElementById(compId+"searchType").value="";
                //document.getElementById(compId+"isMode").value=""; 
                
                var offertarget=document.getElementById(compId+"offer_target").value;
                if(offertarget == "_self"){
                	window.location.href = url;
                }else{
                	window.open(url);
               	}
                 
            }else if(searchModel="down"){
                document.getElementById(compId+"searchForm").action="/FrontDownloads.do?method=submit";
                document.getElementById(compId+"action_page").value=downpage;
                document.getElementById(compId+"keyWord1").name="keyname"; 
                document.getElementById(compId+"searchType").value=2;
                document.getElementById(compId+"isMode").value=false;
                keyWord1.value = keyWord;
                document.getElementById(compId+"searchForm").submit();
            }            
            
           
	     //转码
            // keyWord1.value = encodeURIComponent(keyWord);            
             
             /*
             if(opentype=='_self')
		     {
			    location.href = document.getElementById(compId+"action_page").value;
		     }else if(opentype=='_blank'){
			    //window.open(document.getElementById(compId+"action_page").value);
			     document.getElementById(compId+"searchForm").target ="_blank";
		     } 
		     */    
		    
             //document.getElementById(compId+"searchForm").submit();
             

        }else{
            return false;
        }
    },
      
    
    /**
	 * 功能 : 关键字输入框检查
	 * 参数 : compId--组件Id                 
	*/
    checkinput:function(compId,keywordtips){
        var keyWord = document.getElementById(compId+"keyWord");
        var mustKeyword = document.getElementById(compId+"mustKeyword").value;
        keyWord = trim(keyWord.value);
	//空串判断
        if(keyWord==""||keyWord==keywordtips){
            if(mustKeyword=="true"){
            //document.getElementById("alert").innerHTML="<p><img src='../images/Public/mispic.jpg' />"+i18n_public_search_error1+"</p>";
            //document.getElementById("alert").style.display="block";
            alert(i18n_public_search_error1);
            return false;
            }
        }
        
        return true;
    }   
        
}