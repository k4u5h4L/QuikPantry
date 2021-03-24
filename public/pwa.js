let deferredPrompt;
const addBtn = document.querySelector(".add-button");

window.addEventListener("beforeinstallprompt", (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
    addBtn.addEventListener("click", (e) => {
        // hide our user interface that shows our A2HS button
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === "accepted") {
                console.log("User accepted the A2HS prompt");
                localStorage.setItem("isInstalled", "true");
            } else {
                console.log("User dismissed the A2HS prompt");
            }
            deferredPrompt = null;
        });
    });
});

/* 
// variable store event
window.deferredPrompt = {};

// get button with id
const install_button = document.querySelector(".installPWA");

// if the app can be installed emit beforeinstallprompt
window.addEventListener("beforeinstallprompt", (e) => {
    // this event does not fire if the application is already installed
    // then your button still hidden ;)

    // show button with display:block;
    install_button.style.display = "block";

    // prevent default event
    e.preventDefault();

    // store install avaliable event
    window.deferredPrompt = e;

    // wait for click install button by user
    install_button.addEventListener("click", (e) => {
        window.deferredPrompt.prompt();
        window.deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === "accepted") {
                // user accept the prompt

                // lets hidden button
                install_button.style.display = "none";
            } else {
                console.log("User dismissed the prompt");
            }
            window.deferredPrompt = null;
        });
    });
});

// if are standalone android OR safari
if (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
) {
    // hidden the button
    install_button.style.display = "none";
}

// do action when finished install
window.addEventListener("appinstalled", (e) => {
    console.log("success app install!");
});

*/
