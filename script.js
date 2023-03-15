// Your Script here.
var str="AB";
var ans="";
function encode(str)
{
	for(var i=0;i<str.length;i++)
	{
		
		ans+=str.charAt(i)+13;
		return ans;
		
	}
}