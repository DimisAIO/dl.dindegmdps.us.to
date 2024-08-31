let x = 0;
const phr = ["1.9 => 2.2 GDPS", "Supoprts any known device", "iOS Direct Install", "Awesome PC Launcher", "1K+ levels!", "<a href='https://www.demirramon.com/gen/undertale_text_box.png?text=the%20heck%20is%20a%20clubette&box=undertale&character=undertale-undyne&expression=annoyed&font=determination&size=2&t=1713647262' class='noex' target='_blank' referrer='noreferrer noopener'>Undertale OST Levels</a>", "Join us!"];
function test() {
    document.getElementById("text").innerHTML = phr[x];
    x++
    if(x > phr.length - 1) x = 0;
}
setInterval(() => {
    test()
}, 1000);