function createConfetti() {
    Array.from({ length: 50 }).forEach(() => {
    let confetti = document.createElement('div');
    confetti.className = 'confetti';
    document.body.appendChild(confetti);
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-10px";
    confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
    });
}
const reasons = [
    "твої  `доброго ранку` і картинки котиків",
    "перегляди тіктоків",
    "обійми",
    "прогулянки (з кавою чи квасом :))",
    "підтримку",
    "те, що у свої вихідні, ти чекаєш 9-ої, щоб мене розбудити",
    "те, що лікуєш мене",
    "смачну їжу (обожнюю усе, зроблене тобою, а борщ - особливо)", 
    "хвилювання", 
    "те, що прислухаєшся до допомоги з Дуолінго",
    "те, що смієшся з моїх каламбурів",
    "те, що не засуджуєш",
    "те, що відпускаєш мене, попри тривогу",
    "те, що ходиш з татом за ручки",
    "завжди розважливі поради",
    "обговорення книг",
    "те, що завжди розумієш мене",
    "те, що виховала мене достойною людиною",
    "те, що є моєю найкращою подружкою",
    "те, що я завжди маю до кого звернутись та повернутись",
    "усі філософські розмови",
    "знання",
    "перегляди фільмів",
    "УСЕ",
];
let index = 0;
document.getElementById("love").addEventListener("click", () => {
    document.getElementById("reason").textContent = reasons[index];
    index = (index + 1) % reasons.length;
});
createConfetti();
