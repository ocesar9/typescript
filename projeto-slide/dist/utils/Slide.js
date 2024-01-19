export default class Slide {
    container;
    elements;
    controls;
    time;
    index;
    element;
    constructor(container, elements, controls, time = 5000) {
        this.container = container;
        this.elements = elements;
        this.controls = controls;
        this.time = time;
        this.index = 0;
        this.element = this.elements[this.index];
        console.log(this.container);
        console.log(this.elements);
        console.log(this.controls);
        console.log(this.time);
        this.show(0);
    }
    hide(e) {
        e.classList.remove('active');
    }
    show(index) {
        this.index = index;
        this.element = this.elements[this.index];
        this.elements.forEach(e => {
            this.hide(e);
        });
        this.element.classList.add("active");
    }
}
//# sourceMappingURL=Slide.js.map