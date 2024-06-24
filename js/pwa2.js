let deferredPrompt;
const addToHomeScreenBtn = document.getElementById('add-to-home-screen');

// Listen for the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI notify the user they can add to home screen
    addToHomeScreenBtn.style.display = 'block';

    addToHomeScreenBtn.addEventListener('click', () => {
        // Hide the button
        addToHomeScreenBtn.style.display = 'none';
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
        });
    });
});

// Optionally, listen for the appinstalled event
window.addEventListener('appinstalled', () => {
    console.log('PWA was installed');
});
