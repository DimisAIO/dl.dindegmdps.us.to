let x = 0;
const phr = [
    "1.9 => 2.2 GDPS", 
    "Supports any known device", 
    "iOS Support", 
    "Windows Phone Support", 
    "Awesome PC Launcher", 
    "Custom Geode Index (2.1)", 
    "The Map UNLOCKED", 
    "6.5K levels!", 
    "<a href='https://www.demirramon.com/gen/undertale_text_box.png?text=the%20heck%20is%20a%20clubette&box=undertale&character=undertale-undyne&expression=annoyed&font=determination&size=2&t=1713647262' class='noex' target='_blank' referrer='noreferrer noopener'>Undertale OST Levels</a>", 
    "Diverse Communities!", 
    "Join us!"
];

function updatePhrase() {
    const textEl = document.getElementById("text");
    if (!textEl) return;
    
    // Fade out text
    textEl.classList.add("fade-out");
    
    setTimeout(function() {
        textEl.innerHTML = phr[x];
        textEl.classList.remove("fade-out"); // Fade in text
        x = (x + 1) % phr.length;
    }, 300);
}

setInterval(updatePhrase, 2000); // 2-second interval for better readability