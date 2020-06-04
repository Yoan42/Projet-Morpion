class game {
    constructor () 
    {
        this.controleTour = 0
        this.grilles = document.querySelectorAll('.grille')
    }

    tour() 
    {
        // Incrementation de la variable ' controleTour ' + 1
        this.controleTour++;

        // Si controleTour === 0 ( paire ) alors = O sinon impaire = X
        return this.controleTour % 2 === 0 ? 'O' : 'X';
    }

    

    winner(gagnant) 
    {
        alert(`Les ${gagnant} ont gagné !`);
        this.grilles.forEach(element => element.innerHTML = '');
    }

     // Rows
     win() 
     {
         if (this.grilles[0].innerHTML !== '' && this.grilles[0].innerHTML === this.grilles[1].innerHTML && this.grilles[1].innerHTML 
         === this.grilles[2].innerHTML) {
             this.winner(this.grilles[0].innerHTML);
         }
 
         else if (this.grilles[3].innerHTML !== '' && this.grilles[3].innerHTML === this.grilles[4].innerHTML && this.grilles[4].innerHTML 
         === this.grilles[5].innerHTML) {
             this.winner(this.grilles[1].innerHTML);
         }
 
         else if (this.grilles[6].innerHTML !== '' && this.grilles[6].innerHTML === this.grilles[7].innerHTML && this.grilles[7].innerHTML 
         === this.grilles[8].innerHTML) {
             this.winner(this.grilles[6].innerHTML);
         }
 
         // column
         else if (this.grilles[0].innerHTML !== '' && this.grilles[0].innerHTML === this.grilles[3].innerHTML && this.grilles[3].innerHTML 
         === this.grilles[6].innerHTML) {
             this.winner(this.grilles[0].innerHTML);
         }
 
         else if (this.grilles[1].innerHTML !== '' && this.grilles[1].innerHTML === this.grilles[4].innerHTML && this.grilles[4].innerHTML 
         === this.grilles[7].innerHTML) {
             this.winner(this.grilles[1].innerHTML);
         }
 
         else if (this.grilles[2].innerHTML !== '' && this.grilles[2].innerHTML === this.grilles[5].innerHTML && this.grilles[5].innerHTML 
         === this.grilles[8].innerHTML) {
             this.winner(this.grilles[2].innerHTML);
         }
 
         // Diagonales
         else if (this.grilles[0].innerHTML !== '' && this.grilles[0].innerHTML === this.grilles[4].innerHTML && this.grilles[4].innerHTML 
         === this.grilles[8].innerHTML) {
             this.winner(this.grilles[0].innerHTML);
         }
 
         else if (this.grilles[2].innerHTML !== '' && this.grilles[2].innerHTML === this.grilles[4].innerHTML && this.grilles[4].innerHTML 
         === this.grilles[6].innerHTML) {
             this.winner(this.grilles[2].innerHTML);
        }
    }

    // Determine la fonction jouer et rapelle la fonction win
    play() 
    {
            this.grilles.forEach(element => element.addEventListener('click', (e)=>{

                if (!this.innerHTML) {
                    
                    element.innerHTML = this.tour();  
                    this.win();
                }
            }));
    }
}


let newGame = new game()

newGame.play()

// Chronometre
var setTm=0;
var tmStart=0;
var tmNow=0;
var tmInterv=0;
var tTime=[]; //tableau des temps intermédiaires (lap)
var nTime=0; //compteur des temps intermédiaires
function affTime(tm){ //affichage du compteur
   var vMin=tm.getMinutes();
   var vSec=tm.getSeconds();
   var vMil=Math.round((tm.getMilliseconds())/10); //arrondi au centième
   if (vMin<10){
      vMin="0"+vMin;
   }
   if (vSec<10){
      vSec="0"+vSec;
   }
   if (vMil<10){
      vMil="0"+vMil;
   }
   document.getElementById("divChrono").innerHTML=vMin+":"+vSec+":"+vMil;
}

function fChrono(){
   tmNow=new Date();
   Interv=tmNow-tmStart;
   tmInterv=new Date(Interv);
   affTime(tmInterv);
}

function fStart(){
   fStop();
   if (tmInterv==0) {
      tmStart=new Date();
   } else { //si on repart après un clic sur Stop
      tmNow=new Date();
      Pause=tmNow-tmInterv;
      tmStart=new Date(Pause);
   }
   setTm=setInterval(fChrono,10); //lancement du chrono tous les centièmes de secondes
}

function fStop(){
   clearInterval(setTm);
   tTime[nTime]=tmInterv;
}

function fReset(){ //on efface tout
   fStop();
   tmStart=0;
   tmInterv=0;
   tTime=[];
   nTime=0;
   document.getElementById("divChrono").innerHTML="00:00:00";
}