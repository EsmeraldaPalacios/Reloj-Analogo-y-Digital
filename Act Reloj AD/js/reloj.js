function updateClock() {
    const now = new Date();

    // Actualizar reloj digital
    const digitalClockDisplay = document.querySelector('.digital-clock-display');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    digitalClockDisplay.textContent = `${hours}:${minutes}:${seconds}`;

    // Actualizar reloj analógico
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    const hour = now.getHours() % 12;
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourDegree = (360 / 12) * (hour + minute / 60);
    const minuteDegree = (360 / 60) * (minute + second / 60);
    const secondDegree = (360 / 60) * second;

    hourHand.style.transform = `translateX(-50%) rotate(${hourDegree}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDegree}deg)`;
    secondHand.style.transform = `translateX(-50%) rotate(${secondDegree}deg)`;
}

function animateClock() {
    updateClock();
    requestAnimationFrame(animateClock); 
}

animateClock();
