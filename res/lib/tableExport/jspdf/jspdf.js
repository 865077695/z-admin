var jsPDF=function(){function putTrailer(){out("/Size "+(objectNumber+1)),out("/Root "+objectNumber+" 0 R"),out("/Info "+(objectNumber-1)+" 0 R")}var pageHeight,k,fontNumber,buffer="",pageFormats={a3:[841.89,1190.55],a4:[595.28,841.89],a5:[420.94,595.28],letter:[612,792],legal:[612,1008]},page=0,objectNumber=2,state=0,pages=new Array,offsets=new Array,documentProperties={},fontSize=16,pageFontSize=16;k=72/25.4;var newObject=function(){objectNumber++,offsets[objectNumber]=buffer.length,out(objectNumber+" 0 obj")},putHeader=function(){out("%PDF-1.3")},putPages=function(){var wPt=pageWidth*k,hPt=pageHeight*k;for(n=1;n<=page;n++)newObject(),out("<</Type /Page"),out("/Parent 1 0 R"),out("/Resources 2 0 R"),out("/Contents "+(objectNumber+1)+" 0 R>>"),out("endobj"),p=pages[n],newObject(),out("<</Length "+p.length+">>"),putStream(p),out("endobj");offsets[1]=buffer.length,out("1 0 obj"),out("<</Type /Pages");var kids="/Kids [";for(i=0;i<page;i++)kids+=3+2*i+" 0 R ";out(kids+"]"),out("/Count "+page),out(sprintf("/MediaBox [0 0 %.2f %.2f]",wPt,hPt)),out(">>"),out("endobj")},putStream=function(str){out("stream"),out(str),out("endstream")},putResources=function(){putFonts(),putImages(),offsets[2]=buffer.length,out("2 0 obj"),out("<<"),putResourceDictionary(),out(">>"),out("endobj")},putFonts=function(){newObject(),fontNumber=objectNumber,name="Helvetica",out("<</Type /Font"),out("/BaseFont /"+name),out("/Subtype /Type1"),out("/Encoding /WinAnsiEncoding"),out(">>"),out("endobj")},putImages=function(){},putResourceDictionary=function(){out("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),out("/Font <<"),out("/F1 "+fontNumber+" 0 R"),out(">>"),out("/XObject <<"),putXobjectDict(),out(">>")},putXobjectDict=function(){},putInfo=function(){out("/Producer (jsPDF 20090504)"),void 0!=documentProperties.title&&out("/Title ("+pdfEscape(documentProperties.title)+")"),void 0!=documentProperties.subject&&out("/Subject ("+pdfEscape(documentProperties.subject)+")"),void 0!=documentProperties.author&&out("/Author ("+pdfEscape(documentProperties.author)+")"),void 0!=documentProperties.keywords&&out("/Keywords ("+pdfEscape(documentProperties.keywords)+")"),void 0!=documentProperties.creator&&out("/Creator ("+pdfEscape(documentProperties.creator)+")");var created=new Date,year=created.getFullYear(),month=created.getMonth()+1,day=created.getDate(),hour=created.getHours(),minute=created.getMinutes(),second=created.getSeconds();out("/CreationDate (D:"+sprintf("%02d%02d%02d%02d%02d%02d",year,month,day,hour,minute,second)+")")},putCatalog=function(){out("/Type /Catalog"),out("/Pages 1 0 R"),out("/OpenAction [3 0 R /FitH null]"),out("/PageLayout /OneColumn")},endDocument=function(){state=1,putHeader(),putPages(),putResources(),newObject(),out("<<"),putInfo(),out(">>"),out("endobj"),newObject(),out("<<"),putCatalog(),out(">>"),out("endobj");var o=buffer.length;out("xref"),out("0 "+(objectNumber+1)),out("0000000000 65535 f ");for(var i=1;i<=objectNumber;i++)out(sprintf("%010d 00000 n ",offsets[i]));out("trailer"),out("<<"),putTrailer(),out(">>"),out("startxref"),out(o),out("%%EOF"),state=3},beginPage=function(){page++,state=2,pages[page]="",pageHeight=pageFormats.a4[1]/k,pageWidth=pageFormats.a4[0]/k},out=function(string){2==state?pages[page]+=string+"\n":buffer+=string+"\n"},_addPage=function(){beginPage(),out(sprintf("%.2f w",.200025*k)),pageFontSize=fontSize,out("BT /F1 "+parseInt(fontSize)+".00 Tf ET")};_addPage();var pdfEscape=function(text){return text.replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")};return{addPage:function(){_addPage()},text:function(x,y,text){pageFontSize!=fontSize&&(out("BT /F1 "+parseInt(fontSize)+".00 Tf ET"),pageFontSize=fontSize),out(sprintf("BT %.2f %.2f Td (%s) Tj ET",x*k,(pageHeight-y)*k,pdfEscape(text)))},setProperties:function(properties){documentProperties=properties},addImage:function(imageData,format,x,y,w,h){},output:function(type,options){if(endDocument(),void 0==type)return buffer;"datauri"==type&&(document.location.href="data:application/pdf;base64,"+Base64.encode(buffer))},setFontSize:function(size){fontSize=size}}};