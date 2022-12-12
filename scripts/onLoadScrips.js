(function () {
    const startTime = Date.now();
    window.addEventListener("load", () => {
        const endTime = Date.now();
        document.getElementById("pageLoadTime").innerText = `${
            endTime - startTime
        } ms`;
    });
})();
