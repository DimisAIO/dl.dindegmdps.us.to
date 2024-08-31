const win = "https://cdn-dinde.141412.xyz/DindeGDPS.exe";
const apk = "https://dl.dindegmdps.us.to/mobile?platform=1";
const ios = "https://dl.dindegmdps.us.to/mobile?platform=2";
const idk = "https://dl.dindegmdps.us.to/dl";
const mac = "https://dimisaio1-my.sharepoint.com/personal/dimisaio_141412_xyz/_layouts/15/download.aspx?share=ESsJ5H8ojcVPllgksCRrJiUBsIE8paApVAIhikOF-oHFaw";
let url, pl;
const ua = platform.os.family;

if (ua.startsWith("Windows")) {
    url = win; pl = "Windows";
    document.getElementById("tip").innerHTML = "Windows 10 or newer, you can also run \"winget install dindegdps\" on CMD!";
} else if (ua.toLowerCase().startsWith("os x") || ua.toLowerCase().startsWith("mac")) {
    url = mac; pl = "MacOS";
    document.getElementById("tip").innerHTML = "After install, run \"sudo xattr -rd com.apple.quarantine /Applications/DindeGDPS.app/\" on the terminal";
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
    document.getElementById("tip").innerHTML = "After install, run \"sudo xattr -rd com.apple.quarantine /Applications/DindeGDPS.app/\" on the terminal";
}