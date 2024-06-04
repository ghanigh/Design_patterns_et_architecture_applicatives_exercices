// SANS DESIGN PATTERN
class Audi {
    Vitesse (){}
    Color(){}
}

class BMW {
    Vitesse (){}
    Color(){}
}

class Mercedes {
    Vitesse (){}
    Color(){}
}

const objet1 = new Audi
const objet2 = new BMW
const objet3 = new Mercedes

// AVEC DESIGN PATTERN FACTORY
class Voiture{
    vitess() {
        throw new Error("Cette méthode doit être implémentée.")
    }
}

class Color{
    vitess() {
        throw new Error("Cette méthode doit être implémentée.")
    }
}



class Audi extends Voiture{
    Vitesse (){}
    Color(){}
}

class BMW extends Voiture{
    Vitesse (){}
    Color(){}
}

class Mercedes extends Voiture{
    Vitesse (){}
    Color(){}
}

// classe CartFactory pour créer des instances de voiture
class CartFactory {
    create(){
        switch(marque){
            case 'Audi':
            return new Audi();
            case 'BMW':
            return new BMW();
            case 'Mercedes':
            return new Mercedes();
            default:
                throw new Error("TYpe de voiture inconnu");
        }
    }

}

// Utilisation de la fabrique sans méthode statique
const factory = new CartFactory;
const objetBMW = factory.create("BMW")
const objetAudi = factory.create("Audi")
const objetMercedes = factory.create("Mercedes")

/* Voiture = new Voiture()
Voiture1 = new Voiture()
Voiture2 = new Voiture()

voiture.color = 'red'
voiture1.color = 'bleu'
voiture2.color = 'green'

Voiture.color('pink') */

// Utilisation de la fabrique avec méthode statique
const objetAudi2 = CartFactory.createStatic('Audi')
