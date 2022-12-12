function getCurrentLocation() {
    document.querySelectorAll(".overlay-content [href]").forEach(function (node) {
        node.classList.remove("active")
        if (node.href.toString() === document.location.href.toString()) {
            node.classList.add("active")
        }
    });
}