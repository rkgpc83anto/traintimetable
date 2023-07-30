setInterval('showClock1()',1000);
function showClock1() {
var DWs = new Array('日','月','火','水','木','金','土');
var Now = new Date();
var YY = Now.getYear();
if (YY < 2000) { YY += 1900; }
var MM = set0( Now.getMonth() + 1 );
var DD = set0( Now.getDate() );
var DW = DWs[ Now.getDay() ];
var RTime1 =  MM + '月' + DD + '日' +'('+ DW +')';
document.getElementById("Clock1").innerHTML = RTime1;
}
function set0(num) {
var ret;
if( num < 10 ) { ret = "0" + num; }
else { ret = num; }
return ret;
}