import Document from './tools/Document';
import Toolbar from './tools/Toolbar';

class Editor {
    private document: Document;

    private toolbar: Toolbar;

    /**
     * @param {HTMLElement} root
     */
    constructor(root: HTMLElement) {
        this.document = new Document(root);

        this.toolbar = new Toolbar();
    }
}

export default Editor;
