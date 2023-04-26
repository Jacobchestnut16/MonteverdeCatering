function iframeLoaded() {
    var iFrameID = document.getElementById('page');
    if (iFrameID) {
        // here you can make the height, I delete it first, then I make it again
        iFrameID.height = "";
        iFrameID.height = iFrameID.contentWindow.document.body.scrollHeight + 150 + "px";
    }
}

function myFunction() {
    var x = document.getElementById("topNav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}

function alter(){
    var x = document.getElementById("dropDownContent");
    if (x.className === "men") {
        x.className += "res";
    } else {
        x.className = "men";
    }
}

function check() {
    if (x.className !== "topnav") {
        x.className = "topnav";
    }
}

function menuClick(){
    var x = document.getElementById("dropDownContent");
    var y = document.getElementById("topNav");
    x.className = "men";
    y.className = "topnav";
}
