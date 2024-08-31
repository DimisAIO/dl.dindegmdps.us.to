let linkBuilder;
let geode = false;
let direct = false;
function select(thing) {
    switch(thing) {
        case 1:
        case 2:
            if(thing == 1) linkBuilder = "https://cdn-dinde.141412.xyz/apk/DindeGDPSREPL.apk";
            else {
                linkBuilder = "https://ios.ftp.sh/sign/DindeGDPSREPL.ipa";
                direct = true;
            }
            platform.style.display = "none";
            version.style.display = "block";
            break;
        default:
            if(thing < 19) return;
            if(thing == 20) linkBuilder = linkBuilder.replace("REPL", "-20");
            else if(thing == 21) linkBuilder = linkBuilder.replace("REPL", "-21");
            else {
                linkBuilder = linkBuilder.replace("REPL", "");
                geode = true;
            }
            version.style.display = "none";
            if(direct) {
                finalIOS.style.display = "block";
                ipaLink.href = linkBuilder;
                directLink.href = "itms-services://?action=download-manifest&url=" + linkBuilder.replace("/sign", "/plist").replace(".ipa", ".plist");
            } else {
                finalAndroid.style.display = "block";
                if(geode) geodeLink.style.display = "block";
                location.href = linkBuilder;
            }
    }
}
const autoplatform = Number(new URLSearchParams(window.location.search).get('platform'))
if(autoplatform == 1 || autoplatform == 2) select(autoplatform);
else platform.style.display = "block";