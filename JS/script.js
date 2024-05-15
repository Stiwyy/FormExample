document.addEventListener("DOMContentLoaded", function () {
    var privacyPolicy = document.getElementById("privacy-policy");
    var acceptButton = document.getElementById("accept-Button");
    var declineButton = document.getElementById("decline-Button");
    var policyAccepted = false;
    var form = document.getElementById("Form");
    var privacyButton = document.getElementById("privacy-policy-button");
    var submitButton = document.getElementById("submit-button");

    privacyPolicy.style.display = "none";

    privacyButton.addEventListener("click", function (event) {
        privacyPolicy.style.display = "block";
        event.preventDefault();
    });

    acceptButton.addEventListener("click", function () {
        privacyPolicy.style.display = "none";
        policyAccepted = true;
        handlePolicySubmit();
    });

    declineButton.addEventListener("click", function () {
        if (confirm("Möchten Sie die Seite wirklich verlassen?")) {
            window.close();
        }
    });

    function handlePolicySubmit() {
        if (policyAccepted) {
            submitButton.disabled = false;
            form.privacy.value = "true";
        }
    }
});
