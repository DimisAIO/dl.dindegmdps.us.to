var downloads = {
    win: {
        "name": "Windows",
        "link": "https://github.com/DimisAIO/DindeGDPS-Launcher/releases/latest",
        "tip": "Windows 10 or newer, you can also run \"winget install dindegdps\" on CMD!"
    },
    winp: {
        "name": "Windows Phone",
        "link": "https://gdps.dimisaio.be/w",
        "tip": "Your phone must be Interop Unlocked and/or have CMD Injector installed!"
    },
    linux: {
        "name": "Linux",
        "link": "https://github.com/DimisAIO/DindeGDPS-Launcher/releases/latest",
        "tip": 'On linux distros, use Wine/Proton. Once the Windows installer creates a shortcut, go to its properties and set <b>WINEDLLOVERRIDES="XInput1_4,XInput9_1_0.dll=n,b"</b> as environment variable (Tested on KDE Plasma, Ubuntu)'
    },
    macos: {
        "name": "MacOS",
        "link": "https://rytlock.141412.xyz/share/ElT_zZll",
        "tip": "MacOS will quarantine DindeGDPS. Read the instructions on the TXT file to unblock!"
    },
    android: {
        "name": "Android",
        "link": "/mobile?platform=1",
    },
    ios: {
        "name": "iOS",
        "link": "/mobile?platform=2",
    }
}

var pl;
switch(platform.os.family) {
    case "Windows": pl = downloads.win; break;
    case "Linux": pl = downloads.linux; break;
    case "Windows Phone": pl = downloads.winp; break;
    case "OS X": pl = downloads.macos; break;
    case "Android": pl = downloads.android; break;
    case "iOS": pl = downloads.ios; break;
}

if(pl) {
    document.getElementById("wrongos").style.display = "block";
    document.getElementById("dl").innerText = `Download for: ${pl.name}!`;
    if(pl.name == "MacOS") wrongos.innerHTML += " <span id=ioswitch>Using an iPad? <a class=noex href='javascript:goMac()'>Switch to iOS</a></span>";
    document.getElementById("dl").href = pl.link;
    if(pl.tip) document.getElementById("tip").innerHTML = pl.tip;
}

function goMac() {
    document.getElementById("ioswitch").style.display = "none";
    document.getElementById("dl").innerText = `Download for: iOS!`;
    document.getElementById("dl").href = downloads.ios.link;
    document.getElementById("tip").innerHTML = "";
}
