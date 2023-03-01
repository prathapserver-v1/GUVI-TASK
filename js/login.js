$(function () {
    $("button").click(function () {
        $.ajax({
            url: "php/login.php",
            type: 'post',
            data: {
                email: $('#email').val(),
                password: $('#password').val(),
            },
            success: function (data) {
                console.log(data);
                if (data == 0) {
                    $('#status').text("Logging User..!");
                    $('#showmodal').modal('show');
                    window.location = "profile.html";
                } else {
                    $('#status').text("Something went wrong!");
                    $('#showmodal').modal('show');
                }
            }
        });
    });
});
function hideModal() {
    $('#showmodal').modal('hide');
}