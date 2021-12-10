import ObserverInterface from '../interfaces/ObserverInterface';
import Document from '../tools/Document';

class MutationObserver implements ObserverInterface {
    private document: Document;

    private root: HTMLElement;

    constructor (document: Document) {
        this.document = document;

        this.root = document.getRoot();
    }
}

export default MutationObserver;
