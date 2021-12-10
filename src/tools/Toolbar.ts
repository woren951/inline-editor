class Toolbar {
    private toolbarNodeElement: HTMLDivElement;

    constructor() {
        this.render();
    }

    /**
     * @returns {void}
     */
    private render(): void {
        this.toolbarNodeElement = document.createElement('div');

        this.toolbarNodeElement.classList.add('wi-toolbar');

        document.body.appendChild(this.toolbarNodeElement);
    }

    /**
     * @returns {void}
     */
    private destroy(): void {
        this.toolbarNodeElement.remove();
    }
}

export default Toolbar;
