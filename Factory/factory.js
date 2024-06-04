class Transport{
    livrer(){
        throw new Error("la méthode n'es pas supporté")
    }
}

class Voiture extends Transport{
    livrer(){
       console.log("livraison en voiture!")
    }
}

class Velo  extends Transport{
    livrer(){
       console.log("livraison en vélo!")
    }
}

class TransportFactory{
    createTransport(){
        throw new Error("la méthode n'es pas supporté")
    }
}

class VoitureFactory extends TransportFactory{
    createTransport(){
       return new Voiture();
    }
}

class VeloFactory extends TransportFactory{
    createTransport(){
       return new Velo();
    }
}


const voiturefact = new  VoitureFactory();
const velofact = new VeloFactory();

const voiture = voiturefact.createTransport()
const velo = velofact.createTransport()

voiture.livrer();
velo.livrer();