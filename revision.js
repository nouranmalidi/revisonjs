
/**
 * Révison javascript
 */

// La déclaration de variable

// Je déclare une variable pour enregistrer mon village
const monVillage = "Passamainty";

// Je déclare une variable pour enregistrer le nom de mon chanteur préféré 
const monChanteurPreferer = "Damso";

// J'affiche dans la console log le nom de mon chanter

console.log("Mon chanteur préféré est :",monChanteurPreferer);

// Je crée une variable pour enregistrer l'age de mon chanteur

let ageDamso = 33;

// Je crée un tableau qui liste les 5 albums de mon chanteur

const albumsDamso = ["QUALF", "Batterie faible", "Ipséité","J'AI MENTI.","BEYAH"];

// J'affiche dans la console les albums N°1, N°4 et N°5

console.log(albumsDamso[0] ,albumsDamso[3] ,albumsDamso[4]);

/**
 * Je crée un disque CD sous forme d'objet.
 * Le disque contient 1 morceaux.
 * Les information du morceau sont : 
 * titre 
 * nom du chanteur 
 * date de sortie du morceau 
 * durée du morceau 
 * style de musique
 * liens vers Youtube
 * prix
 * auteur
 * compositeur
 */

const cd = {

titre: "Périscope",
nomDuChanteur: monChanteurPreferer,
dateDeSortie: "8 juillet 2016",
dureeDuMorceau: "2 min 29 sec",
styleDeMusique: "RAP",
lienYoutube: "https://www.youtube.com/watch?v=HTf_ANcxbjU",
auteur: monChanteurPreferer,
prix: "2.99$",
compositeur: "Xvbarbar"

}

// J'affiche dans la console tout l'objet
console.log(cd);

// J'affiche dans la console le lien vers Youtube de l'objet

console.log("Lien youtube :", cd.lienYoutube);

// J'affiche dans la console TOUT en MAJUSCULE le titre du morceau

console.log("Titre : ",cd.titre.toUpperCase());

// J'affiche dans la console TOUT en minuscule le style du morceau

console.log("Style : ", cd.styleDeMusique.toLocaleLowerCase());

// Je déclare une liste de notes : 34, 26, 33, 17, 68

const notes = [34, 26, 33, 17, 68]

// Je récupère le plus grand nombre et je l'affiche dans la console 

let max = Math.max(...notes);       // (...) permets de recopier les valeur de notes
console.log("La plus grande note :",max)

// J'affiche dans la console le plus petit nombre
let min = Math.min(...notes);
console.log("La plus petitte note :",min);

//Je crée un tableau fruits 
let tableauFruits = ["Manga","Papaya","Fenési","Tundra","Sindza"];

//Je crée un tableau légume
let tableauLegumes = ["Demba","Tamati","Dodoki","Bengani","Mafana"];

//J'affiche la fusion entre les tableaux fruits et légumes
console.log("Fusion des fruits et légumes : ", ...tableauFruits, ...tableauLegumes);

// La notion de MAP
// Une map permet de structurer (coder) les information sous forme de couple.
// Le couple est formé d'une clé et d'une valeur clée-valeur ou key-value (anglais)
// MAP () est un objet 
// Je vais créer un ou plusieur instances issues de l'objet MAP()
let mapVetements = new Map([
    ["t-shirt", 100],
    ["chemise",200],
    ["salouva",250],
    ["robes",300]

]); 