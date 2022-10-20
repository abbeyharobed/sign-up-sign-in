function validateTextBox() {
    var box = document.getElementById("email");
    var box2 = document.getElementById("password");
    var form = document.getElementById("theForm");




    if (box.value == "") {
        box.focus();
        box.style.border = "solid 3px red";
        alert("No blank spaces please");
        return false;
    }

    if (box2.value == "") {
        box2.focus();
        box2.style.border = "solid 3px red";
        alert("Fill in Password");
        return false;
    }

    if (form.value == "") {
        input.focus();
    }
    
}   
