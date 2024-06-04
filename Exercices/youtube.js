class Sujet {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notifierObservers(message) {
        this.observers.forEach(observer => observer.update(message));
    }
}

class Observer {
    constructor(nom) {
        this.nom = nom;
    }

    update(message) {
        console.log(`${this.nom} a reçu la notification : ${message}`);
    }
}

class Youtube extends Sujet {
    publierNouvelleVideo(video) {
        console.log(`Nouvelle vidéo publiée : ${video}`);
        this.notifierObservers(`Nouvelle vidéo disponible : ${video}`);
    }
}

const maChaine = new Youtube();
const abonne1 = new Observer('Mike');
const abonne2 = new Observer('Féliciano');

maChaine.addObserver(abonne1);
maChaine.addObserver(abonne2);

maChaine.publierNouvelleVideo('Design Patterns en JavaScript');

const abonne3 = new Observer('Yahn');
maChaine.addObserver(abonne3);
maChaine.publierNouvelleVideo('Introduction à Observateur');
