function submitForm() {
    alert("Submit button");
}


//TODO минус
//в input type number можно вводить exp.эта функция не позволяет вводить exp
function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /^-?[0-9]*/;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

function send_request() {
    var coeffData = {
        coeffA: $('#coeffA').val(),
        coeffB: $('#coeffB').val(),
        coeffC: $('#coeffC').val(),
    };
    $.ajax({
        type: "POST",
        url: "SolverServlet",
        // The key needs to match your method's input parameter (case-sensitive).
        data: coeffData
    });
}