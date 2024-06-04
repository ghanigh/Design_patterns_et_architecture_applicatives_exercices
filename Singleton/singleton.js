class Singleton{

    constructor(){
        if (!Singleton.instance){
            Singleton.instance = this
        }
    return Singleton.instance
}
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2);






                    // COURS FRANCIS


/*
IMPLEMENTEZ UN SIGNLETON EN JAVASCRIPT pour créer une classe logger qui ne peut etre instanciée qu'une fois
Cette classe doit contenir une méthode log pour enregistrer des messages. */

class Logger {
    // COnstructeur de la class Logger
    constructor(){
        // Vérifie si une instance de Logger existe déja
        if(Logger.instance){
            // Si oui, retourne cette instance
            return Logger.instance;
        }
        // Si aucune instance n'existe, insitialise un tableau vide pour stocker les logs
        this.logs = []
        // Enregistre cette instance comme instance unique de Logger
        Logger.instance = this;
        // Retourne l'Instance actuelle
        return this;

    }

    // Méthode pour enregistrer un message dans les logs
    log(message){
        // Ajoute le message au tableau des logs
        this.logs.push(message);
        // Affiche le message dans la console.
        console.log(`Log: ${message}`);
    }

    // Méthode pour afficher tous les logs enregistrés
    printLogs(){
        // Affiche un message indiquant que les logs vont être affichés
        console.log(`Logs:`);
        // Parcourt tous les logs enregistrés et les afficher dans la console avec leur numéro d'index
        this.logs.forEach((Log , index) => {
            console.log(`${index + 1} - ${Log}`);
        })
    }
}

// Test de l'utilisation du Singleton
const logger1 = new Logger();
logger1.log('Premier message enregistré');

const logger2 = new Logger() // Récupère l'instance existante
logger2.log('Deuxième message enregistré');

const logger3 = new Logger() // Récupère également l'instance existante
logger3.log('Troisième message enregistré');


logger1.printLogs();


/*
Cette classe n'est instanciable qu'une seule fois !
Pas de risque de créer plusieurs objets Singleton !
IL n'y en aura qu'un seul !
*/

