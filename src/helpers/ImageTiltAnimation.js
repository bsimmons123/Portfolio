import VanillaTilt from "vanilla-tilt";

export default function initTiltAnimation() {
    const elements = document.querySelectorAll(".js-tilt")
    VanillaTilt.init(elements, {
        easing: "cubic-bezier(.3,.98,.52,.99)",
});
}
