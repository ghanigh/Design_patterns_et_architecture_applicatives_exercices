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
class Observer{
    update(message){
        console.log(`L'observateur a reçu le message :${message}`)
    }
}

const sujet = new Subjet();
const observer1 = new Observer();
const observer2 = new Observer();

sujet.addObserver(observer1);
sujet.addObserver(observer2);
sujet.notifierObservers("coucou");