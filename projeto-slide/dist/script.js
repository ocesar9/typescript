import Slide from "./utils/Slide.js";
const container = document.getElementById("slide");
const slideContainer = document.getElementById("slide-elements");
const controls = document.getElementById("slide-controls");
if (container && slideContainer && controls && slideContainer.children.length) {
    const slide = new Slide(container, Array.from(slideContainer.children), controls, 3000);
}
//# sourceMappingURL=script.js.map