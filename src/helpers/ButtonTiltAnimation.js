import VanillaTilt from "vanilla-tilt";

export default function initTiltAnimation() {
    const elements = document.querySelectorAll(".button-js-tilt")
    VanillaTilt.init(elements, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
    });
}
