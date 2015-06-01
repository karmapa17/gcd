var arr=require("fs").readFileSync("rawdump.txt","utf8").split(/\r?\n/);
var fromWylie=require("tibetan").wylie.fromWylie;

var out=[],idx=0,entry="",def="",count=0;
while (idx<arr.length) {
	var line=arr[idx++];
	if (idx<213) continue;
	if (line[0]==="=" && line[line.length-1]=="=") {
		if (entry) {
			out.push([fromWylie(entry),fromWylie(def.substr(0,def.length-2))]);
			def="";
			count=0;
		}
		entry=line.substring(2,line.length-2);  //remove leading and tailing ==
		idx++;    //skip the extra line with many ????
	} else {
//		if (count>1) console.log("more than one line",idx)
		count++;
		def+=line.replace("��	","")+"\\n";
	}
};

out.push([fromWylie(entry),fromWylie(def.substr(0,def.length-2))]);
out.sort();

var batch=Math.floor(out.length/3000);
var lst=[];
for (var i=0;i<batch+1;i++) {
	var o=out.slice(i*3000,i*3000+3000).join("\n");
	var fn="gcd"+(i+1)+".csv";
	lst.push(fn);
	require("fs").writeFileSync(fn,o,"utf8");	
}
console.log("batch",batch)
require("fs").writeFileSync("gcd.lst",lst.join("\n"),"utf8");
