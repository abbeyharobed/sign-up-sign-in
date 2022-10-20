function validateTextBox() {
    var box = document.getElementById("name");
    var box2 = document.getElementById("phone");
    var box3 = document.getElementById("email");
    var box4 = document.getElementById("password");
    var all = document.getElementsByClassName("boxes")

    if (all.value == "") {
        all.focus();
        all.style.border = "solid 3px red";
        alert("Please fill all blank spaces")
        return false;
    }


    if (box.value == "") {
        box.focus();
        box.style.border = "solid 3px red";
        alert("No blank spaces please")
        return false;
    }

    else if (box2.value == "") {
        box2.focus();
        box2.style.border = "solid 3px red";
        alert("Not less than 11 please")
        return false;
    }
    
    else if (box3.value.length < 11 ) {
        alert("Please fill in your email")
        box3.focus();
        box3.style.border = "solid 3px blue";
        return false;
    }

    else if (box4.value == "") {
        box4.focus();
        box4.style.border = "solid 3px red";
        alert("No idiot, no blank spaces")
        return false;
    }

    
}   
