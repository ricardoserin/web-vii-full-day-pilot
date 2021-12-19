/*const getRemainingTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));

    return {
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays,
        remainTime
    }
};

const countdown = (deadline, elem, finalMessage) => {
    const el = document.getElementById(elem);

    const timerUpdate = setInterval(() => {
        let t = getRemainingTime(deadline);
        if (t.remainDays == 1) {
            el.innerHTML = `Faltan ${t.remainDays} Dia : ${t.remainHours} Horas : ${t.remainMinutes} Min. : ${t.remainSeconds} Seg.`;
        } else {
            el.innerHTML = `Faltan ${t.remainDays} Dias : ${t.remainHours} Horas : ${t.remainMinutes} Min. : ${t.remainSeconds} Seg.`;
        }

        if (t.remainTime <= 1) {
            clearInterval(timerUpdate);
            el.innerHTML = finalMessage;
        }
    }, 1000)
};

const time = () => { countdown('Dec 3 2021 15:26:40 UTC-5', 'clock', '<a href="#inscripcion">El evento ya empezó, Inscribete!</a>'); }
export default time*/
import 'simplycountdown.js/dev/simplyCountdown'
simplyCountdown('#cuenta', {
    year: 2022, // required
    month: 1, // required
    day: 12, // required
    hours: 9, // Default is 0 [0-23] integer
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: { singular: 'Dia', plural: 'Dias' },
        hours: { singular: 'Hora', plural: 'Horas' },
        minutes: { singular: 'Minuto', plural: 'Minutos' },
        seconds: { singular: 'Segundo', plural: 'Segundos' }
    },
    plural: true, //use plurals
    onEnd: function() {
        // your code
        return;
    },
    countUp: true,
});
const time = () => { simplyCountdown }
export default time