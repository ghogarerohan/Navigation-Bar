"use strict";
const options = {
    threshold: 0.7
};
class navigationBar {
    constructor() {
        this.sections = document.querySelectorAll('section');
        this.bubble = document.querySelector('bubble');
        console.log(this.sections);
        console.log(this.bubble);
        let obserever = new IntersectionObserver(this.navCheck, options);
        this.sections.forEach(section => {
            obserever.observe(section);
        });
    }
    navCheck(entries) {
        this.bubble = document.querySelector('.bubble');
        entries.forEach(entry => {
            console.log(entry);
            const className = entry.target.className;
            console.log(className);
            this.activeAnchor = document.querySelector(`[data-page=${className}]`);
            const gradientIndex = entry.target.getAttribute('data-index');
            const coords = this.activeAnchor.getBoundingClientRect();
            const directions = {
                height: coords.height,
                width: coords.width,
                top: coords.top,
                left: coords.left
            };
            const gradients = [
                'linear-gradient(to right top, #f46b45,#eea849)',
                'linear-gradient(to right top, #005c97,#363795)',
                'linear-gradient(to right top, #e53935,#e35d5b)'
            ];
            if (entry.isIntersecting) {
                this.bubble.style.setProperty('left', `${directions.left}px`);
                this.bubble.style.setProperty('top', `${directions.top}px`);
                this.bubble.style.setProperty('width', `${directions.width}px`);
                this.bubble.style.setProperty('height', `${directions.height}px`);
                this.bubble.style.background = gradients[gradientIndex];
            }
        });
    }
}
;
const navBar = new navigationBar();
//# sourceMappingURL=Navbar.js.map