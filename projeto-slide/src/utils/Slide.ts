export default class Slide {
    container: Element;
    elements: Element[];
    controls: Element;
    time: number;
    index: number;
    element: Element;
  constructor(
    container: Element,
    elements: Element[],
    controls: Element,
    time: number = 5000
  ) {
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
  hide(e:Element){
    e.classList.remove('active');
  }
  show(index: number): void {
    this.index = index;
    this.element = this.elements[this.index];
    this.elements.forEach(e =>{
      this.hide(e);
    })
    this.element.classList.add("active");
  }
}
