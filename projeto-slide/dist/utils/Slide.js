import Timeout from "./Timeout.js";
export default class Slide {
    container;
    slidesContainer;
    controls;
    time;
    index;
    slideElement;
    timeout;
    paused;
    thumbItems;
    thumb;
    constructor(container, slidesContainer, controls, time = 5000) {
        this.container = container;
        this.slidesContainer = slidesContainer;
        this.controls = controls;
        this.time = time;
        this.timeout = null;
        this.paused = false;
        this.index = Number(localStorage.getItem('activeSlide')) ? Number(localStorage.getItem('activeSlide')) : 0;
        this.slideElement = this.slidesContainer[this.index];
        this.thumbItems = null;
        this.thumb = null;
        this.init();
    }
    hide(el) {
        el.classList.remove("active");
        if (el instanceof HTMLVideoElement) {
            el.currentTime = 0;
            el.pause();
        }
    }
    show(index) {
        this.index = index;
        this.slideElement = this.slidesContainer[this.index];
        console.log(localStorage.getItem('activeSlide'));
        localStorage.setItem("activeSlide", String(this.index));
        if (this.thumbItems) {
            this.thumb = this.thumbItems[this.index];
            this.thumbItems.forEach(el => el.classList.remove("active"));
            this.thumb.classList.add("active");
        }
        this.slidesContainer.forEach((el) => this.hide(el));
        this.slideElement.classList.add("active");
        if (this.slideElement instanceof HTMLVideoElement) {
            this.autoVideo(this.slideElement);
        }
        else {
            this.auto(this.time);
        }
        this.auto(this.time);
    }
    autoVideo(video) {
        video.muted = true;
        video.play();
        let firstPlay = true;
        video.addEventListener('playing', () => {
            if (firstPlay)
                this.auto(video.duration * 1000);
            firstPlay = false;
        });
    }
    auto(time) {
        this.timeout?.clear();
        this.timeout = new Timeout(() => this.next(), time);
        if (this.thumb)
            this.thumb.style.animationDuration = `${time}ms`;
    }
    prev() {
        const prev = this.index > 0 ? this.index - 1 : this.slidesContainer.length - 1;
        this.show(prev);
    }
    next() {
        const next = this.index + 1 < this.slidesContainer.length ? this.index + 1 : 0;
        this.show(next);
    }
    pause() {
        document.body.classList.add('pause');
        console.log("paused");
        this.timeout?.pause();
        this.thumb?.classList.add("paused");
        this.paused = true;
    }
    continue() {
        document.body.classList.remove('pause');
        console.log("continued");
        this.paused = false;
        this.thumb?.classList.remove("paused");
        this.timeout?.continue();
    }
    addControls() {
        const prevButton = document.createElement("button");
        const nextButton = document.createElement("button");
        prevButton.innerText = "Anterior";
        nextButton.innerText = "Próximo";
        this.controls.appendChild(prevButton);
        this.controls.appendChild(nextButton);
        this.controls.addEventListener("mouseover", () => this.pause());
        this.controls.addEventListener("mouseleave", () => this.continue());
        this.controls.addEventListener("touchstart", () => this.pause());
        this.controls.addEventListener("touchend", () => this.continue());
        prevButton.addEventListener("pointerup", () => this.prev());
        nextButton.addEventListener("pointerup", () => this.next());
    }
    addThumbItems() {
        const thumbContainer = document.createElement("div");
        thumbContainer.id = "slide-thumb";
        for (let index = 0; index < this.slidesContainer.length; index++) {
            thumbContainer.innerHTML +=
                `
        <span>
          <span class="thumb-item"></span>
        </span>
      `;
        }
        this.controls.appendChild(thumbContainer);
        this.thumbItems = Array.from(document.querySelectorAll(".thumb-item"));
    }
    init() {
        this.addControls();
        this.addThumbItems();
        this.show(this.index);
    }
}
//# sourceMappingURL=Slide.js.map