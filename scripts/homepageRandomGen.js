document.addEventListener("DOMContentLoaded", () => {
    const refreshQuotes = ["a.k.a pobertraterson","a.k.a robhasnofriends","java programmer, javascript amateur","linux nerd","reformed macos hater","windows 11 critic","formerly pobertmc.xyz","manchester-based scouser","professionally unprofessional","<p>excellent programmer</p>"];

    const quoteSpan = document.getElementById("quote");
    const random = refreshQuotes[Math.floor(Math.random() * refreshQuotes.length)];

    if (quoteSpan) quoteSpan.textContent = random;
});