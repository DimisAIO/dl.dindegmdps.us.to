const win = "https://github.com/DimisAIO/DindeGDPS-Launcher/releases/latest";
const winp = "https://gdps.dimisaio.be/w";
const apk = "https://dl.dindegmdps.us.to/mobile?platform=1";
const ios = "https://dl.dindegmdps.us.to/mobile?platform=2";
const idk = "https://dl.dindegmdps.us.to/dl";
const mac = "https://rytlock.141412.xyz/share/ElT_zZll";
let url, pl;
const ua = platform.os.family;

if(ua == "Windows Phone") {
    url = winp; pl = "Windows Phone";
    document.getElementById("tip").innerHTML = "Only install if you know what you're doing! (do you know what an interop unlock is?)";
} else if (ua.startsWith("Windows")) {
    document.getElementById("demo").style.display = "block";
    url = win; pl = "Windows";
    document.getElementById("tip").innerHTML = "Windows 10 or newer, you can also run \"winget install dindegdps\" on CMD!";
} else if (ua.startsWith("Linux")) {
    document.getElementById("demo").style.display = "block";
    url = win; pl = "Linux";
    document.getElementById("tip").innerHTML = 'On linux distros, use Wine/Proton. Once the Windows installer creates a shortcut, go to its properties and set <b>WINEDLLOVERRIDES="XInput1_4,XInput9_1_0.dll=n,b"</b> as environment variable (Tested on KDE Plasma, Ubuntu)'
} else if (ua.toLowerCase().startsWith("os x") || ua.toLowerCase().startsWith("mac")) {
    document.getElementById("demo").style.display = "block";
    url = mac; pl = "MacOS";
    document.getElementById("tip").innerHTML = "After install, read the TXT file that was alongside the DMG files";
} else if (ua == "iOS") {
    url = ios; pl = "iOS";
} else if (ua == "Android") {
    url = apk; pl = "Android";
} else {
    pl = false;
}

if(pl) {
    document.getElementById("dl").innerText = `Download for ${pl}`;
    if(pl == "MacOS") dl.innerHTML += " <a href='javascript:goMac()'>(iPad?)</a>";
    document.getElementById("dl").href = url;
}

function goMac() {
    document.getElementById("dl").innerText = `Download for iOS`;
    document.getElementById("dl").href = ios;
    document.getElementById("tip").innerHTML = "";
}
