const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const meridiem = document.getElementById('meridiem');

const day = document.getElementById('day');
const date = document.getElementById('date');
const month = document.getElementById('month');
const year = document.getElementById('year');

const weekDays = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Auguest', 'September', 'October', 'November', 'December']

function setTime(){
    const dt = new Date();
    const hr = dt.getHours();
    hours.innerText = appendZero(hr > 12 ? hr-12 : hr) ;
    minutes.innerText = appendZero(dt.getMinutes());
    seconds.innerText = appendZero(dt.getSeconds());
    meridiem.innerText = hr < 12 ? 'AM' : 'PM';
    day.innerText = weekDays[dt.getDay()];
    date.innerText = appendZero(dt.getDate());
    month.innerText = months[dt.getMonth()];
    year.innerText = dt.getFullYear();
    setTimeout(setTime, 1000);
}
function appendZero(num){
    if(Number(num) < 10)
        return '0'+num;
    else 
        return num;
}
setTime();
