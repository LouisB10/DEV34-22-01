class Personnage{
    constructor(pseudo, classe, sante, attaque,niveau){
    this.pseudo = pseudo;
    this.classe = classe;
    this.sante = sante;
    this.attaque = attaque;
    this.niveau = niveau;
    }
    evoluer = () => {
        this.niveau++;
    console.log(this.pseudo + " passe au niveau "+ this.niveau + " !");
    }
    verifierSante = () =>{
        console.log(this.pseudo + " a maintenant " +this.sante + "hp");
        if(this.sante <=0){
            this.sante = 0;
            console.log(this.pseudo + " a perdu !");
        }
    }
    get informations(){
        console.log(this.pseudo + " est un " + this.classe + " a " + this.sante + " points de vie et est au niveau " + this.niveau);
    }
    }

class Magicien extends Personnage{
    constructor(pseudo, classe, sante, attaque,niveau){
        super(pseudo,"magicien",170,90,1);
    }
    attaquer(personnage){
        personnage.sante = personnage.sante - this.attaque
        console.log(this.pseudo + " attaque " + personnage.pseudo + " en lui lançant un sort et inflige " + this.attaque +" dégats");
        this.evoluer();
        personnage.verifierSante();
    }
    coupSpecial(personnage){
        console.log(this.pseudo + " attaque avec son coup spécial puissances des arcanes et inflige à "+ personnage.pseudo +" "+ this.attaque*5 + " dégats");
        this.evoluer();
        personnage.verifierSante();
    }
}

class Guerrier extends Personnage{
    constructor(pseudo, classe, sante, attaque,niveau){
        super(pseudo,"guerrier",350,50,1);
    }
    attaquer(personnage){
        personnage.sante = personnage.sante - this.attaque
        console.log(this.pseudo + " attaque " + personnage.pseudo + " avec son épée tranchante et lui inflige " + this.attaque +" dégats");
        this.evoluer();
        personnage.verifierSante();
    }
    coupSpecial(personnage){
        console.log(this.pseudo + " attaque avec son coup spécial haches de guerre et inflige à "+ personnage.pseudo +" "+ this.attaque * 5 + " dégats");
        this.evoluer();
        personnage.verifierSante();
    }
}

let gde = new Magicien("Thor");
let azd = new Guerrier("Odin");


