// javascript program for form validation of the form present in the last part of footer
function validateForm() {
    var email = document.getElementById("useremail").value;
    var textarea = document.getElementById("message").value;

    if (email == "" || textarea == "") {
        if (email == "") {
            alert("Please enter an email");
        }
        else if (textarea == "") {
            alert("Please enter message");
        }
    }
    else {
        alert("Thanks for giving feedback");
    }
}

