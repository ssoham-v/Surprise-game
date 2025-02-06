document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    let level = 0;
    const dialogues = [
        "Soham: Duhi, kya aaj tumne espionko dekha? subah se mil nhi rha.",
        "Duhi: Haan, wahi toh aaj mil hi nhi rhi hai woh. dhundne nikalte hai chalo",
        "(dono phir espionko dhundne ke liye ghar se nikalte hai)",
        "(unhe beech me ek ajeeb sa portal dikhta hai and woh log uske andar jaate hai espionko dhundne)",
        "(unhe kuch puzzles dikhte hai udhar)",
        "Soham: kya kare?",
        "Duhi: kya kya kare ? puzzles solve karte hai",
        "Soham: Acha, tum bhi! Chalo, shuru karte hain.",
        "Soham: Easy tha yeh wala hai na?",
        "Duhi: Haan, lagta hai humein kuch solve karna hoga yahaan.",
        "Soham: shayad yeh wala solve karne ke baad espionmile",
        "Soham: espionka track mil gaya! Level 2: Ek puzzle ka jawab dena hoga.",
        "Soham: less gooo!!! :)))) finally mil gayi espion",
        "Duhi: Aww espion!!! =)))  kaha chali gayi the tum??? chalte hai hum phirse ghar abhi"
    ];

    function showNextDialogue() {
        if (level < dialogues.length) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText(dialogues[level], 10, 50);
            level++;
        } else {
            alert("Game finished. Hope you enjoyed!");
        }
    }

    canvas.addEventListener('click', showNextDialogue);
});()
