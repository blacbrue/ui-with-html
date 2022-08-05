window.addEventListener("DOMContentLoaded", () => {
    setTimeout(redirectToLogin, 2500)
})

function redirectToLogin() {
    window.location = `/${location.href.split("/")[location.href.split("/").length - 2]}/login.html`
}