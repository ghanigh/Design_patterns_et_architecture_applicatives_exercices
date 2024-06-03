class Sujet {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifierObservers(message) {
        this.observers.forEach(observer => observer.update(message));
    }
}

class Observer {
    update(message) {
        console.log(`L'observateur a reçu le message : ${message}`);
    }
}

class Youtube extends Sujet {
    publierNouvelleVideo(video) {
        console.log(`Nouvelle vidéo publiée : ${video}`);
        this.notifierObservers(`Nouvelle vidéo disponible : ${video}`);
    }
}

class Abonne extends Observer {
    constructor(nom) {
        super();
        this.nom = nom;
    }

    update(message) {
        console.log(`{this.nom} a reçu la notification : ${message}`);
    }
}
const maChaine = new Youtube();
const abonne1 = new Abonne('Alice');
const abonne2 = new Abonne('Bob');

maChaine.addObserver(abonne1);
maChaine.addObserver(abonne2);

maChaine.publierNouvelleVideo('Design Patterns en JavaScript');

const abonne3 = new Abonne('Charlie');
maChaine.addObserver(abonne3);
maChaine.publierNouvelleVideo('Introduction à Observateur');
