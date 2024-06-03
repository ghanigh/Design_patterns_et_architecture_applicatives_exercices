class Sujet{
    constructor(){
        this.observers = [];
    }
    addObserver(observer){
        this.observers.push(observer);
    }
    notifierObservers(message){
        this.observers.forEach(observer =>observer.update(message));

    }
}