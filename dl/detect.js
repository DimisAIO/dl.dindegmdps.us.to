const win = "https://cdn-dinde.141412.xyz/DindeGDPS.exe";
const winp = "https://gdps.dimisaio.be/w";
const apk = "https://dl.dindegmdps.us.to/mobile?platform=1";
const ios = "https://dl.dindegmdps.us.to/mobile?platform=2";
const idk = "https://dl.dindegmdps.us.to/dl";
const mac = "https://dimisaio1-my.sharepoint.com/:f:/g/personal/dimisaio_141412_xyz/EqPBHhvUHVFFtbV3cd_aqlcBp-VlQtD21gT1_2NmjjFLXQ?e=WWaMwj";
let url, pl;
const ua = platform.os.family;

if(ua == "Windows Phone") {
    url = winp; pl = "Windows Phone";
    document.getElementById("tip").innerHTML = "Only install if you know what you're doing! (do you know what an interop unlock is?)";
} else if (ua.startsWith("Windows")) {
    url = win; pl = "Windows";
    document.getElementById("tip").innerHTML = "Windows 10 or newer, you can also run \"winget install dindegdps\" on CMD!";
} else if (ua.toLowerCase().startsWith("os x") || ua.toLowerCase().startsWith("mac")) {
    url = mac; pl = "MacOS";
    document.getElementById("tip").innerHTML = "After install, open the TXT file under the \"Applications shortcut\" and follow the instructions";
} else if (ua == "iOS") {
    url = ios; pl = "iOS";
    document.getElementById("tip").innerHTML = "After install, go to Settings => General => Device Mgmt. and trust the \"Enterprise\"";
} else if (ua == "Android") {
    url = apk; pl = "Android";
} else {
    pl = false;
}

if(pl) {
    document.getElementById("dl").innerHTML = `Detected ${pl}`;
    if(pl == "MacOS") dl.innerHTML += " <a href='javascript:goMac()'>(iPad?)</a>";
    document.getElementById("dlnk").href = url;
} else {
    document.getElementById("dl").innerHTML = `No OS has been detected`;
}

function goMac() {
    document.getElementById("dl").innerHTML = `Detected iOS`;
    document.getElementById("dlnk").href = ios;
    document.getElementById("tip").innerHTML = "After install, go to Settings => General => Device Mgmt. and trust the \"Enterprise\"";
}
