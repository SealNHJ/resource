//Resource Javascript

//Mobiel Resource
if( screen.width > 1 && screen.width<751)
{
//document.write('<link rel="stylesheet" href="mobileResource.css" type="text/css" />');

}
else{}
//Tablet Resurce
if( screen.width > 751 && screen.width<1281)
{
//document.write('<link rel="stylesheet" href="tabletResource.css" type="text/css" />');
document.write('<p>Tablet resource</p>');
document.write('<img src="IMG/TabletRes.jpg" id="foto2">');
}
else{}
//Laptop Resource
if( screen.width > 1281 && screen.width<1367)
{
//document.write('<link rel="stylesheet" href="laptopResource.css" type="text/css" />');
document.write('<p>Laptop resource</p>');
document.write('<img src="IMG/LapRes.jpg" id="foto">');
}
else{}
//PC Resurce
if( screen.width > 1367 && screen.width<1921)
{
//document.write('<link rel="stylesheet" href="pcResource.css" type="text/css" />');

}