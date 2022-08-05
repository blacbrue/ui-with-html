window.addEventListener("DOMContentLoaded", () => {
    setTimeout(redirectToDesktop, 5000)
})

function redirectToDesktop() {
    window.location = `/${location.href.split("/")[location.href.split("/").length - 2]}/desktop.html`
}