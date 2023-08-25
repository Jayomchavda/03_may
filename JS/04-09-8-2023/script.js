// ======================click event ============

function formcheck() {
    let name = document.getElementById("name").value;
    let addr = document.getElementById("addr").value;
    let zcode = document.getElementById("zcode").value;
    let cntry = document.getElementsByName("cntry").checked;

    if (name == "" || name == null) {
        document.getElementById("msg1").innerText = "Please Enter Your Name!";
        return false;
    } else if (addr == "" || addr == null) {
        document.getElementById("msg2").innerText = "Enter Address";
        return false;
    } else if (zcode == "" || zcode == null) {
        document.getElementById("msg3").innerText = "Enter Zip code";
        return false;
    } else if (cntry == "-1") {
        document.getElementById("msg4").innerText = "Select Country";
        return false;
    }
}





// ====================onblur====================

function blankcheck(blnk, msg) {
    if (name == "" || name == null) {
        document.getElementById(msg).innerText = "Enter value!!!"
        return false;
    } else {
        document.getElementById(msg).innerText = "";
        return false;
    }
}




// ====================keyboard event ===============

function namecheck(ncheck, msg) {
    let regex = /^[a-zA-Z]*$/

    if (!(regex.test(ncheck.value))) {
        document.getElementById(msg).innerText = "Only Alphabet Characters Use!";
        return false;
    } else {
        document.getElementById(msg).innerText = "";
        return false;
    }
}