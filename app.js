// Usine à produits

class Produit {
  constructor(id, nom, prix, quantite) {
    this.id = id;
    this.nom = nom;
    this.prix = prix;
    this.quantite = quantite;
  }
  toString(){
      return this.id + " " + this.nom + " " + this.prix + "€ " + "Quantié :" +this.quantite;
  }
  getId(){
      return this.id
  }
}



//fonctions du programme
function displayProducts(){
  produits.forEach(p => console.log(p.toString()));
}

function displayBasket(){
  if(monPanier.length != 0) { 
      monPanier.forEach(p=> console.log(p.toString())); 
  } else {
      console.log("Mon panier est vide");
  }
};

function addProduct(){
  let choixProduit =parseInt(prompt("Tapez le numéro de l'id du produit désiré")) ;
          produits.forEach(p => { 
              if(p.getId() == choixProduit){
                  if(p.quantite < 1){
                      monPanier.push(p);
                      p.quantite++;
                      total+= p.prix;
                      console.log(p.nom + "" + "a bien été ajouté au panier" );
                  } else {
                      p.quantite++;
                      total+= p.prix;
                      console.log(p.nom + "" + "a bien été ajouté au panier" );
                  }
              }
          });
}

function rmProduct(){
  let choixProduit =parseInt(prompt("Tapez le numéro de l'id du produit désiré"));
  let index = monPanier.indexOf(choixProduit);
          produits.forEach(p => { 
              if(p.getId() == choixProduit){
                  --p.quantite;
                  total = total - p.prix;                    
                  console.log(p.nom + "" + "a bien été supprimé du panier" ); 
                  if(p.quantite == 0){
                      monPanier.splice(index,1);  
              }
          }
          });
};

function order(){
  if(monPanier.length == 0) {
      console.log("Votre panier est vide");
  } else {
      monPanier.forEach(p => console.log(p.toString()));
      console.log("Total de la commande = " + total + " €")
      const c = confirm("Press a button!");
      if (c == true) {
          console.log("Vous avez passé la commande!");
      } else {
          console.log("Commande non passée");
      }

  }
  
};

// Produits générés depuis la classe Produit

const iphone = new Produit(0, "iphoneX", 800, 0);
const samsung = new Produit(1, "samsungGalaxyS10",600, 0 );
const huawei = new Produit(2,"huaweiP30 400€", 450, 0 );

// Liste des produits 

let produits = [iphone, samsung, huawei];

// Début du programme ~ fenêtre contextuelle 
let monPanier = [];
let total = 0;
let choixFonction = 0;

// while( choixFonction != 6) {
//     choixFonction = parseInt(prompt("Que souhaitez-vous faire ? \n\n 1 - Afficher la liste des produits \n 2 - Afficher le contenu de mon panier \n 3 - Ajouter au panier \n 4 - Supprimer du panier \n 5 - Passer la commande \n 6 - Sortir du programme",""));   
//     if(choixFonction == 1) {
//         displayProducts();
//     }else if(choixFonction == 2) {
//         displayBasket();
//     }else if(choixFonction == 3) {
//         addProduct();
//     }else if(choixFonction == 4) {
//         rmProduct();
//     }else if(choixFonction == 5) {
//         order();
//     }

// };

function generateTableHead(table) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
};

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let table = document.querySelector("table");
let data = Object.keys(produits[0]);



