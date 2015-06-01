var kse=require("ksana-search");

var tofind="ག";
var dbname="gcd";
var opts={range:{start:0,maxseg:1000},
					nospan:true,nohighlight:false};


kse.search(dbname,tofind,opts,function(err,data){
	var output=data.excerpt.map(function(d){
		return d.segname+":"+d.text
	});
	console.log(output);
})
