function valForm() { //function to validate that the correct data is input into the form before it can submit
    let x = document.forms["myForm"]["Name"].value;
    if (x == "") {
    alert("Please enter your name!");
    return false;
    }
    let y = document.forms["myForm"]["Email"].value;
    if (y == "") {
        alert("Please enter a valid email address!");
        return false;
    }
    let z = document.forms["myForm"]["Message"].value;
    if (z == "") {
        alert("Please enter a message!");
        return false;
    }
    return true;
}