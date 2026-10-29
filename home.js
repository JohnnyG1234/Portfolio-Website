// Type out the first command like it's being entered in the terminal.
document.addEventListener("DOMContentLoaded", () => {
    const el = document.querySelector("[data-type]");
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const text = el.textContent;
    el.textContent = "";
    let i = 0;
    const tick = () => {
        el.textContent = text.slice(0, ++i);
        if (i < text.length) setTimeout(tick, 90);
    };
    setTimeout(tick, 300);
});
