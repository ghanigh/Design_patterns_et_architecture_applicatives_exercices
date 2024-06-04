/* 
Le Polymorphisme vous permet de traiter différent objet de manière uniforme en utilisant une interface commune.
Tout comme vous utilisez le même boutton sur une télécommande pour contrôler différents appareils électronique.
*/

class sport {
    bouge(sportif) {
        throw new Error('Cette méthode doit être implémentée par une sous-classe')
    }
}

class Nager extends Sport {
    bouge(sportif){
        return `${sportif.GetNom()} va nager !`
    }
}

class Marcher extends Sport {
bouge(sportif){
    return `${sportif.getNom()} va marcher !`
    }
}

class sportif {
    constructor(nom) {
        this.nom = nom;
    }

    getNom(){
        return this.nom;
    }
 
    bouger(sport){
        return sport.bouge(this); // 'this' représente Sportif 
    }
}

// Création des instances 
const dany = new Sportif ('Danyl')
const jeNage = new Nager ('');
const jeMarche = new Marcher ('');

// Utilisation de la méthodes
console.log(dany.bouger(jeNage)); // Danyl va nager
console.log(dany.bouger(jeMarche)); // Danyl va marcher
