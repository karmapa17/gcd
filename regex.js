/**
	search dictionary entries with regular expression
*/
var kde=require("ksana-database");

var tofind=/མི་.+?་པ/


var output=[];
kde.open("gcd",function(err,db){
	db.get("segnames",function(entries){
		entries.map(function(entry){
			var m=entry.match(tofind);
			if (m) output.push(m.input);
		})
		console.log(output);
	});
})