const counterDisplay = document.querySelector('h3');
let counter = 0;

const bubbleMaker = () =>
{
    //Création d'une balise 'span' qui correspond à la bulle
    const bubble = document.createElement('span');
    //On affecte la classe bubble à la variable du même nom (pour le CSS)
    bubble.classList.add('bubble');
    //La variable bubble est un enfant du body
    document.body.appendChild(bubble);
    
    //Permet d'affecter à chaque bulle une hauteur et une largeur aléatoire grâce à la méthode 'Math.random'
    const size = Math.random() * 200 + 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;

    //Permet d'affecter à chaque bulle une trajectoire aléatoire grâce à la méthode 'Math.random'
    bubble.style.top = Math.random() * 100 + 50 + "%";
    bubble.style.left = Math.random() * 100 + "%";
    

    /*Ternaire qui va faire partir la bulle vers la gauche ou la droite de façon aléatoire
     Si le 'Math.random' est supérieur à 0.5, 'plusMinus' renvoie 1 sinon elle renvoie - 1*/
    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    //Permet d'accéder à la variable css pour diffuser les bulles sur tout l'écran grâce à la variable 'plusMinus'
    bubble.style.setProperty('--left', Math.random() * 100 * plusMinus + "%");

    /*Au clic sur un bulle:
    - ajout de 1 au compteur
    - affecter le nouveau résultat au compteur affiché à l'écran
    - supprimer la bulle de l'écran*/
    bubble.addEventListener('click',()=>
    {
        counter++;
        counterDisplay.textContent = counter;
        bubble.remove();
    });


    // Dans 8 secondes, autodestruction de la bulle
    setTimeout(()=>
    {
        bubble.remove();

    },8000);
};

// Génère une bulle toutes les secondes
setInterval(bubbleMaker, 1000);