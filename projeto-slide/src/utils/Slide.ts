import Timeout from "./Timeout.js";

export default class Slide {
  container: Element;
  slides: Element[];
  controls: Element;
  time: number;
  index: number;
  slideElement: Element;
  timeout: Timeout | null;
  paused: boolean;
  constructor(
    container: Element,
    slides: Element[],
    controls: Element,
    time: number = 5000
  ) {
    this.container = container;
    this.slides = slides;
    this.controls = controls;
    this.time = time;
    this.timeout = null;
    this.paused = false;

    this.index = 0;
    this.slideElement = this.slides[this.index];

    this.init();
  }
  hide(el: Element) {
    el.classList.remove("active");
  }
  show(index: number) {
    this.index = index;
    this.slideElement = this.slides[this.index];
    this.slides.forEach((el) => this.hide(el));
    this.slideElement.classList.add("active");

    this.auto(this.time);
  }
  auto(time:number){
    this.timeout?.clear();
    this.timeout = new Timeout(() => this.next(),time);
  }
  prev() {
    const prev = this.index > 0 ? this.index - 1 : this.slides.length - 1;
    this.show(prev);
  }
  next() {
    const next = this.index + 1 < this.slides.length ? this.index + 1 : 0;
    this.show(next);
  }
  pause(){
    console.log("paused");
    this.timeout?.pause();
    this.paused = true;
  }
  continue(){
    console.log("continued");
    this.paused = false;
    this.timeout?.continue();
  }
  private addControls() {
    const prevButton = document.createElement("button");
    const nextButton = document.createElement("button");
    prevButton.innerText = "Anterior";
    nextButton.innerText = "Próximo";
    this.controls.appendChild(prevButton);
    this.controls.appendChild(nextButton);

    this.controls.addEventListener("mouseover",() => this.pause())
    this.controls.addEventListener("mouseleave",() => this.continue())

    prevButton.addEventListener("pointerup", () => this.prev());
    nextButton.addEventListener("pointerup", () => this.next());
  }
  private init() {
    this.addControls();
    this.show(this.index);
    
  }
}
