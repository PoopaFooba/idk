function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    document.getElementById('current-time').textContent = `== Current Time for Me: ${hours}:${minutes}:${seconds} ${ampm} ==`;
}
setInterval(updateTime, 1000);

function startApp() {
    document.querySelector('.start-overlay').style.display = 'none';
    document.querySelector('.title').style.opacity = 1;
    document.querySelector('.time').style.opacity = 1;
    document.querySelector('.social-buttons').style.opacity = 1;
    document.querySelector('.footer').style.opacity = 1;
    document.querySelector('.audio-control').style.opacity = 1;
    document.querySelector('.audio-control').style.display = 'block';
    document.getElementById('audio-iframe').src = "https://www.youtube.com/embed/zfHAAuDWnFk?autoplay=1&loop=1&playlist=zfHAAuDWnFk";
}