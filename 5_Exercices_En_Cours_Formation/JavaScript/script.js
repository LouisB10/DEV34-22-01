    let citations = [
        ["Le pain est à l'eau ce que l'homme est à la planète, l'un peut exister sans l'autre tandis que l'autre ne peut pas survivre sans l'un","Thomas Moreno"],
        ["La peur bien que dérangeante pour certaines personnes peut parfois sauver des vies","Thomas Moreno"],
        ["Mamamia", "Mario"],
        ["Le coup le plus rusé que le diable ait jamais réussi, c’est de faire croire à tout le monde qu’il n’existait pas.", "Kevin Spacey - Usual Suspects de Bryan Singer"],
        ["J’ai dégusté son foie avec des fèves au beurre et un excellent Chianti", "Anthony Hopkins - Le silence des agneaux de Jonathan Demme"],
        ["La vérité c’est comme une couverture trop petite. Tu peux tirer dessus de tous les côtés, tu auras toujours les pieds froids.", "Peter Weir - Le cercle des poètes disparus"],
        ["On m’appelle Le Doctor, ou le gardien, ou « dégagez de cette planète ! » quoique à proprement parler ce n’est peut-être pas vraiment un nom.", "Doctor Who, le onzième docteur."],
        ["Tes fautes de fils sont mes défaillances de père.", "Gladiator, Marc Aurèle. "],
        ["- Je ne vois pas pourquoi tu ne veux pas le porter. < - Parce que j’ai l’air d’un idiot, voilà pourquoi.  - Pas plus que d’habitude.", "Harry Potter et L’ordre du Phoenix, Hermione et Ron"],
        ["Aussi loin que je me souvienne, j’ai toujours voulu être un gangster. ", "Les affranchis, Henry Hill. "],
        ["- Excusez-moi mais vous êtes en train d’uriner sur ma voiture.  -Hein ? Ho, Ha oui ! … Mais c’est parce que j’ai la même là bas, j’ai confondu ! … Je peux finir ? - Oui.", "Les bronzés font du ski. "]
    ]
    
    var bouton = document.querySelector("button"); //On selectionne notre bouton "Citation suivante" et on le met dans une variable "bouton"
    var textCit = document.querySelector("p");//On selectionne notre texte "Citation" et on le met dans une variable "textCit"
    var auteurCit = document.querySelector('.auteur');//On selectionne notre texte "Auteur" et on le met dans une variable "auteurCit"
    
    var CitationActuelle = null // On définit une variable qui est la citation actuellement affiché sur l'écran, elle prend une valeur null
    var CitationProchaine = null// On définit une variable qui est null par défaut, elle sert à afficher les citations à l'écran

    function displayCitation(CitationProchaine) {
      
        textCit.textContent=`${citations[CitationProchaine][0]}`;   // On remplace le texte de notre variable textCit par une citation grâce au "[0]" dans notre tableau
                                                                    //La colonne du tableau est choisi grâce à "[CitationsProchaine]"
        auteurCit.textContent=`${citations[CitationProchaine][1]}`; // On remplace le text de notre variable auteurCit par un auteur grâce au "[1]" dans notre talbeau
  
      }
      
      function CitationRecherche() {
          random = Math.floor(Math.random() * citations.length); // On définit une variable "random" qui est égal à un arrondi(math.floor) 
                                                                // d'un nombre au hasard(math.random()) multiplié à la longueur du tableau(citations.lenghth)
          return random // On retourne random
      }
    
    bouton.addEventListener("click", function (event) { // Evenement qui se met en route quand on clique sur le bouton "Citation suivante"
        var gohan = CitationActuelle // On définit une variable "gohan" qui prend la valeur d'une autre variable "CitationActuelle"
    
        do 
        CitationActuelle = CitationRecherche() //Boucle avec comme instruction : la variable "CitationActuelle" prend la valeur que la fonction "CitationRecherche()" 
                                               // renvoie, donc "random" un nombre entier aléatoire
        while(gohan == CitationActuelle) //La condition de la boucle est : la variable "gohan" est égale à la variable "CitationActuelle", donc c'est une boucle infini

        displayCitation(CitationActuelle) // On utilise la fonction dispayCitation qui permet d'afficher la citatio à l'écran
                                          // avec comme valeur de colonne la variable "CitationActuelle"
    });
    
    
    

