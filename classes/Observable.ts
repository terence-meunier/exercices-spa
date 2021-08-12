export default class Observable {

    public observers: any;

    constructor() {
        this.observers = [];
    }

    registerObserver(observer: any): number {
        this.observers.push(observer);
        return this.observers.length - 1;
    }

    unregisterObserver(index: number): void {
        this.observers.splice(index, 1);
    }

    update(data) {
        this.observers.forEach(observer => observer(data));
    }
}