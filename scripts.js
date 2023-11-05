document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const userEmail = document.querySelector("#email");
    const messageBox = document.querySelector(".message");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const Emailvalue = userEmail.value.trim();

        if (Emailvalue === "") {
            messageBox.textContent = "Please enter a valid email address.";
        } else {
            messageBox.textContent = `Thank you! Your email address ${Emailvalue} has been added to our mailing list!`;
        }

    });
});