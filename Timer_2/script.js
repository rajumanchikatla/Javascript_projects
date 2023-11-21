function showtime(){
  var dt = new Date();
  var h = dt.getHours();
  var m = dt.getMinutes();
  var s = dt.getSeconds();
  var session = "AM";

  if(h >= 12){
    session = "PM";
  }
  if(h > 12){
    h = h - 12;
  }

  h = h < 10 ? "0" +h : h ;
  s = s < 10 ? "0" +s : s ;
  m = m < 10 ? "0" +m : m ;

   var time = h + " : "+ m + " :" + s + " " + session;
   var date = dt.toDateString();
  document.getElementsByTagName('h1')[0].innerText = time;
  document.getElementsByTagName('h3')[0].innerText = date;
  setTimeout(showtime,1000);
}