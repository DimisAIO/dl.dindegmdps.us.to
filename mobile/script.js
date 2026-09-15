let linkBuilder;
let geode = false;
let opn = false;
let direct = false;

function showElement(el, displayType = "block") {
    el.style.display = displayType;
    el.classList.add("step-view");
}

function hideElement(el) {
    el.style.display = "none";
}

function select(thing) {
    switch(thing) {
        case 1:
        case 2:
            if(thing == 1) linkBuilder = "https://cdn-dinde.141412.xyz/apk/DindeGDPSREPL.apk";
            else {
                linkBuilder = "https://ios.ftp.sh/sign/DindeGDPSREPL.ipa";
                direct = true;
                hideElement(document.getElementById("ioshideable"));
            }
            hideElement(document.getElementById("platform"));
            showElement(document.getElementById("version"));
            break;
        default:
            if(thing < 19) return;
            if(thing == 19) opn = true;
            if(thing > 21) {
                linkBuilder = linkBuilder.replace("REPL", "");
                geode = true;
            } else linkBuilder = linkBuilder.replace("REPL", "-" + thing);
            
            hideElement(document.getElementById("version"));
            
            if(direct) {
                showElement(document.getElementById("finalIOS"));
                document.getElementById("ipaLink").href = linkBuilder;
                document.getElementById("directLink").href = "itms-services://?action=download-manifest&url=" + linkBuilder.replace("/sign", "/plist").replace(".ipa", ".plist");
                if(geode) showElement(document.getElementById("geodeLinkDarwin"), "inline-block");
            } else {
                showElement(document.getElementById("finalAndroid"));
                if(geode || opn) {
                    showElement(document.getElementById("geodeLink"), "inline-block");
                    if(opn) {
                        document.getElementById("geodeLink").children[0].innerText = "Download 1.9 Server";
                        document.getElementById("geodeLink").href = "https://cdn-dinde.141412.xyz/apk/Server19.apk";
                        showElement(document.getElementById("gLink"), "inline-block");
                    }
                }
                location.href = linkBuilder;
            }
    }
}

const autoplatform = Number(new URLSearchParams(window.location.search).get('platform'));
if(autoplatform == 1 || autoplatform == 2) {
    select(autoplatform);
} else {
    showElement(document.getElementById("platform"));
}