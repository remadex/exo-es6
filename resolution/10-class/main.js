/**
 * La terre est en danger, une nouvelle maladie grave vient d'apparaitre, vous devez créer une class "cure".
 * Cette classe devra prendre un argument, le nom de la maladie qui est le "corosida".
 * Vous allez également créer deux méthodes, une première méthode qui est "cureFree" qui affichera un message:
 * "Application du vaccin pour le "corosida" pour tout le monde"
 * 
 * Une deuxième méthode qui est "cureSell" qui prendra un paramètre "price" qui affichera un message:
 * "Le vaccin pour le "corosida" est sur le point d'être vendu pour ${price}€ à l'unité"
 * 
 * Attention à bien faire en sorte qu'on puisse appliquer la même classe dans le cas d'une autre maladie :-)
 */

class Cure {
  constructor(name) {
    this.name = name;
  }

  cureFree() {
    console.log(`Application du vaccin pour le "${this.name}" pour tout le monde`)
  }

  cureSell(price) {
    console.log(`Le vaccin pour le "${this.name}" est sur le point d'être vendu pour ${price}€ à l'unité`);
  }
}


const cure = new Cure('corosida');

cure.cureFree();
cure.cureSell(12000);