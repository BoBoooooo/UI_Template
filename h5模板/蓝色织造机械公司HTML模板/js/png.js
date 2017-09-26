
$(document).ready(

function()
{
	
    var arVersion = navigator.appVersion.split("MSIE")
    var version = parseFloat(arVersion[1])
var PIXELGIF="images/pngfix.gif";
var pngxp=/\.png$/i;
var AlphaPNGfix= "progid:DXImageTransform.Microsoft.AlphaImageLoader";
    if ((version >= 5.5 && version < 7) && (document.body.filters)) 
    {
       for(var j=0; j<document.images.length; j++)
       {
          var img = document.images[j]
          var imgName = img.src.toUpperCase()
          if(imgName.indexOf("PNGFIX.GIF"))
		continue;
          if (imgName.substring(imgName.length-3, imgName.length) == "PNG")
          {
             var imgID = (img.id) ? "id='" + img.id + "' " : ""
             var imgClass = (img.className) ? "class='" + img.className + "' " : ""
             var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' "
             var imgStyle = "display:inline-block;" + img.style.cssText 
             if (img.align == "left") imgStyle = "float:left;" + imgStyle
             if (img.align == "right") imgStyle = "float:right;" + imgStyle
             if (img.parentElement.href) imgStyle = "cursor:pointer;" + imgStyle
             var strNewHTML = "<span " + imgID + imgClass + imgTitle
             + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";"
             + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"
             + "(src=\'" + img.src + "\');\"></span>" 
				//alert(strNewHTML);

             if (img.useMap) {
                         strNewHTML += "<img style=\"position:relative; left:-" + img.width + "px;"
                         + "height:" + img.height + "px;width:" + img.width +"\" "
                         + "src=\"" + PIXELGIF + "\" usemap=\"" + img.useMap
                       + "\" border=\"" + img.border + "\">";
                   }
             img.outerHTML = strNewHTML
             j = j-1
          }
           var kmax = document.forms.length;
           for(var k=0; k<kmax; k++) {
                 var fmob = document.forms[k];
                 var elmarr = fmob.getElementsByTagName("input");
                 var jmax = elmarr.length;
                 for(var j=0; j<jmax; j++) {
                         var elmob = elmarr[j];
                         if(elmob && elmob.type=="image" && pngxp.test(elmob.src)) {
                                 var origsrc = elmob.src;
                                 elmob.src = PIXELGIF;
                                 elmob.style.filter = AlphaPNGfix+"(src='" +origsrc +"')";
                         }
                 }
           }
       }
    }    
}
);
