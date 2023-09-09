setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();

    let hourRotation = 30*hours + minute/2;
    let minuteRotation = 6*minute;
    let secondRotation = 6*seconds;
    let h = document.getElementById("hours");
    h.style.transform=`rotate(${hourRotation}deg)`;
    let m = document.getElementById("minutes");
    m.style.transform=`rotate(${minuteRotation}deg)`;
    let s = document.getElementById("seconds");
    s.style.transform=`rotate(${secondRotation}deg)`;

}, 1000 );