document.querySelectorAll('.service,.project').forEach(services => {
    services.addEventListener('click', function(e) {
        e.preventDefault();
        // Show your pop-up message here
        if (confirm("Sorry! This service is not available yet."));
    });
});