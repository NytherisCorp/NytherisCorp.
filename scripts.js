// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Branch buttons
    const branchButtons = document.querySelectorAll(".branch");
    branchButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.classList.contains("locked")) {
                displayMessage("This branch is not available yet.");
            }
        });
    });

    // Login/Sign-Up functionality
    const loginButton = document.querySelector("#login-signup-btn");
    const modal = document.querySelector(".modal");
    const closeModal = document.querySelector(".close-modal");
    const form = document.querySelector("#login-signup-form");

    loginButton.addEventListener("click", () => {
        modal.style.display = "block";
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        const name = document.querySelector("#name").value;

        if (!email || !password || (form.dataset.mode === "signup" && !name)) {
            displayMessage("Please fill in all required fields.");
            return;
        }

        if (form.dataset.mode === "login") {
            displayMessage(`Welcome back, ${email}!`);
        } else {
            displayMessage(`Account created successfully! Welcome, ${name}.`);
        }

        modal.style.display = "none";
    });

    // Switch between login and sign-up
    const toggleLoginSignup = document.querySelector("#toggle-login-signup");
    toggleLoginSignup.addEventListener("click", () => {
        if (form.dataset.mode === "login") {
            form.dataset.mode = "signup";
            toggleLoginSignup.textContent = "Already have an account? Log in here.";
            document.querySelector("#name-group").style.display = "block";
        } else {
            form.dataset.mode = "login";
            toggleLoginSignup.textContent = "Don't have an account? Sign up here.";
            document.querySelector("#name-group").style.display = "none";
        }
    });

    // "Order Website" form functionality
    const orderForm = document.querySelector("#order-form");
    orderForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const websiteType = document.querySelector("#website-type").value;
        const customizations = Array.from(
            document.querySelectorAll("input[name='customizations']:checked")
        ).map((input) => input.value);
        const paymentMethod = document.querySelector("input[name='payment-method']:checked").value;

        displayMessage(
            `Order placed! \nWebsite Type: ${websiteType} \nCustomizations: ${customizations.join(", ")} \nPayment Method: ${paymentMethod}`
        );
    });

    // AI Assistant Button
    const aiButton = document.querySelector("#ai-assistant-btn");
    aiButton.addEventListener("click", () => {
        displayMessage("AI Assistant is currently unavailable. Please try again later.");
    });

    // Helper function to display messages
    function displayMessage(message) {
        const messageBox = document.createElement("div");
        messageBox.className = "message-box";
        messageBox.textContent = message;

        document.body.appendChild(messageBox);

        setTimeout(() => {
            messageBox.style.opacity = "0";
            setTimeout(() => {
                messageBox.remove();
            }, 500);
        }, 3000);
    }
});
