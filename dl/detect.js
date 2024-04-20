const win = "https://cdn-dinde.141412.xyz/DindeGDPS.exe";
const apk = "https://install.appcenter.ms/users/daio/apps/dindegdps-1/distribution_groups/release";
const ios = "https://dimisaio1-my.sharepoint.com/personal/dimisaio_141412_xyz/_layouts/15/download.aspx?share=ETGcn8ZJ2RRKiQdJXpTO4UsBMmbJUx5deNfGlPoNd0O1mQ";
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
    if(pl == "iOS") document.getElementById("dl").innerHTML = `Detected ${pl} <a class="noex" href="https://dgdps.us.to/r?url=DindeGDPS">(Direct Install)</a>`;
    else document.getElementById("dl").innerHTML = `Detected ${pl}`;
    document.getElementById("dlnk").href = url;
} else {
    document.getElementById("dl").innerHTML = `No OS has been detected`;
}
