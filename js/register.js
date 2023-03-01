$(function () {
    $("button").click(function () {
        $.ajax({
            url: "php/register.php",
            type: 'post',
            data: {
                name: $('#name').val(),
                email: $('#email').val(),
                dob: $('#dob').val(),
                password: $('#password').val(),
            },
            success: function (data) {
                console.log(data);
                if (data == 0) {
                    $('#status').text("Profile created..!");
                    $('#showmodal').modal('show');
                    window.location = "login.html";
                } else {
                    $('#status').text("Fill the following data's!");
                    $('#showmodal').modal('show');
                }
            }
        });
    });

});
function hideModal() {
    $('#showmodal').modal('hide');
}