import ObserverInterface from '../interfaces/ObserverInterface';
import MutationObserver from '../observers/MutationObserver';
import SelectionObserver from '../observers/SelectionObserver';

class Document {
    private root: HTMLElement;

    private observers: Array<ObserverInterface> = [];

    /**
     * @param {HTMLElement} root
     */
    constructor(root: HTMLElement) {
        this.root = root;

        this.render();

        this.initObservers();
    }

    /**
     * @returns {HTMLElement}
     */
    getRoot(): HTMLElement {
        return this.root;
    }

    /**
     * @returns {void}
     */
    private render(): void {
        this.root.contentEditable = 'true';
    }

    private initObservers(): void {
        this.observers.push(
            new MutationObserver(this)
        );

        this.observers.push(
            new SelectionObserver(this)
        );
    }
}

export default Document;
