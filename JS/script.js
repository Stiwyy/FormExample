document.addEventListener("DOMContentLoaded", function() {
    var privacyPolicy = document.getElementById("privacy-policy");
    var acceptButton = document.getElementById("accept-Button");
    var declineButton = document.getElementById("decline-Button");
    var policyAccepted = false;
    var form = document.getElementById("Form")
    setTimeout(function() {
        privacyPolicy.style.display = "block";
      }, 2000);
    
  
    acceptButton.addEventListener("click", function() {
      privacyPolicy.style.display = "none";
      policyAccepted = true;
      handlePolicySubmit();
    });
  
    declineButton.addEventListener("click", function() {
      if (confirm("Möchten Sie die Seite wirklich verlassen?")) {
        window.close(); 
      }
    });

    function handlePolicySubmit() {
        if (policyAccepted) {
            form.privacy.value = "true";
        }
    }
  });
