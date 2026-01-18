document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    const goSignup = document.getElementById("goSignup");
    const goLogin = document.getElementById("goLogin");

    // Switch to Sign Up
    goSignup.addEventListener("click", () => {
        loginForm.classList.remove("active");
        signupForm.classList.add("active");
    });

    // Switch to Login
    goLogin.addEventListener("click", () => {
        signupForm.classList.remove("active");
        loginForm.classList.add("active");
    });

    // Demo submit handlers
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Login successful!");
    });

    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Sign up successful!");
    });

});
