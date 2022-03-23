interface Listenable {
    addEventListener(name: string, fn: () => void): EventListener;
    removeEventListener(name: string, fn: () => void): void;
}

class Listener {
    listenable: Listenable;
    evtName: string;
    evtHandler: () => void;

    constructor(
        listenable: Listenable,
        evtName: string,
        evtHandler: () => void
    ) {
        this.listenable = listenable;
        this.evtName = evtName;
        this.evtHandler = evtHandler;
    }

    listen() {
        this.listenable.addEventListener(this.evtName, this.evtHandler);
    }

    deafen() {
        this.listenable.removeEventListener(this.evtName, this.evtHandler);
    }
}

export default Listener;
