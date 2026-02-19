// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("myButton");
    const message = document.getElementById("message");

    button.addEventListener("click", function () {

        message.innerHTML = "🎉 Button clicked successfully!";

    });

});
