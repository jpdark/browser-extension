export class HtmlStyleHelpers {

    constructor() {
    }

    fadeBackground() {
        const modalBackground = document.getElementById('modalBackground');
        modalBackground.classList.add('show');
    }

    unfadeBackground() {
        const modalBackground = document.getElementById('modalBackground');
        modalBackground.classList.remove('show');
    }
}