var fs=require("fs");      
var rt=fs.readFileSync("./rawdump.txt","utf8");
var rows=rt.split(/\n/);
var tibetan=require("ksana-tibetan").wylie;


    var posarr=[];
   // var errsense=[];
     for(var i=212;i<rows.length;i++)
     {
     	if(rows[i].search(/==/g)!=-1)  //有等號
         posarr.push(i); // console.log(i+":"+rows[i]);
     }

     var j=0;
     while(j<posarr.length)
     {
     	var entries="",sense="";
        
        try{
     	   entries=rows[posarr[j]].match(/(==[^=]+==)/g).toString().replace(/=/g,""); 
            
            for(var k=posarr[j]+2;k<posarr[j+1];k++)
            {
              if(posarr[j+1]-k>1)
              {
                // if(rows[k].search(/empty/g)!=-1)
                //     errsense.push(k+1);
                sense += rows[k].match(/\w.*\S/g).toString()+"\n";
                } 
              else
              {                 
                // if(rows[k].search(/empty/g)!=-1)
                //     errsense.push(k+1); //印出來原檔列數+1: 較好找
               sense += rows[k].match(/\w.*\S/g).toString();
              }
            }


        }catch(e){
           console.log((posarr[j]+1)+e);  //印出來原檔列數+1: 較好找
        }

         // console.log(entries+","+sense);
        console.log((posarr[j]+1)+ tibetan.fromWylie(entries+","+sense));         
         // console.log((posarr[j]+1)+ tibetan.fromWylie(entries+","+sense));   //印出來原檔列數+1: 較好找

        j=j+1;
     }

//console.log(errsense);