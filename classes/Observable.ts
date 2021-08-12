import Observer from "./Observer";

export default class Observable {

    public observers: Observer[];

    constructor() {
        this.observers = [];
    }

    registerObserver(observer: Observer): number {
        this.observers.push(observer);
        return this.observers.length - 1;
    }

    unregisterObserver(index: number): void {
        this.observers.splice(index, 1);
    }

    update(data: any) {
        this.observers.forEach(observer => observer.update(data));
    }
}