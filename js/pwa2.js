let deferredPrompt;
const addToHomeScreenBtn = document.getElementById('add-to-home-screen');

// Function to detect if the user is on an Android device
function isAndroid() {
    return /android/i.test(navigator.userAgent);
}

// Function to detect if the user is using Chrome
function isChrome() {
    return /chrome/i.test(navigator.userAgent) && !!window.chrome;
}

// Function to check if the PWA is installed
function isAppInstalled() {
    return window.matchMedia('(display-mode: standalone)').matches;
}

// Function to show a toast message
function showToast(message) {
    // Replace with your preferred toast implementation (e.g., Toastify, Toast.js, etc.)
    alert(message);
}

// Listen for the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (e) => {
    if (isAndroid() && isChrome()) {
        // Prevent the mini-infobar from appearing on mobile
        e.preventDefault();
        // Stash the event so it can be triggered later.
        deferredPrompt = e;
        // Enable the button
        addToHomeScreenBtn.removeAttribute('disabled');
    }
});

// Check if PWA is already installed
if (isAppInstalled()) {
    addToHomeScreenBtn.disabled = true;
}

// Click event listener for the button
addToHomeScreenBtn.addEventListener('click', () => {
    if (isAndroid() && isChrome()) {
        // Show installing message
        addToHomeScreenBtn.innerHTML = '<img src="chrome-logo.png" class="chrome-r"> Installing...';
        
        // Show the prompt
        deferredPrompt.prompt();
        
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
                addToHomeScreenBtn.disabled = true; // Disable the button after installation
            } else {
                console.log('User dismissed the A2HS prompt');
                addToHomeScreenBtn.innerHTML = 'Add to Home Screen'; // Reset button text
            }
            deferredPrompt = null;
        });
    } else {
        // Handle non-supported browsers or devices
        if (!isAndroid() || !isChrome()) {
            showToast('This button only works with Android / Chrome.');
        }
    }
});
