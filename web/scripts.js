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
        coeffC: $('#coeffC').val()
    };

    $(document).ready(function () {
        if ($('#coeffA').val() == '' || $('#coeffB').val() == '' || $('#coeffC').val() == '') {
            alert("Введите все коэффициенты");

        } else if ($('#coeffA').val() == '0') {
            alert("Это система для решения квадратных уравнений.\nВведите коэффициент А");
        } else {
            $.ajax({
                type: "POST",
                dataType: 'json',
                url: "SolverServlet",
                data: coeffData,
                success: function (data, status, xhr) {
                    // $('#response').text(JSON.stringify(data));
                    // alert("Data received" + JSON.stringify(data));
                    console.log(data);
                    var json = jQuery.parseJSON(JSON.stringify(data));
                    var x1 = json.x1;
                    var x2 = json.x2;
                    $('#results').append('<tr> data </tr>');
                    $('#results > tbody > tr:last').append('<td>' + coeffData.coeffA + ", " + coeffData.coeffB + ", " + coeffData.coeffC + '</td><td>' + x1 + " ," + x2 + '</td>');

                },
                error: function (data) {
                    alert("Error" + JSON.stringify(data))
                }
            });
            $('#results').on('click', 'tr', function () {
                $(this).remove();
            });
        }
    })
}
