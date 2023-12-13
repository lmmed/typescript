import { Client } from "./Commande/Model/client";
import { Catalogue } from "./Commande/Model/produit";

const catalogue = new Catalogue([]) ;
catalogue.ajouterProduit('prod1', 100, 'fam1') ;
catalogue.ajouterProduit('prod2', 101, 'fam2') ;
catalogue.ajouterProduit('prod3', 102, 'fam1') ;
catalogue.ajouterProduit('prod4', 103, 'fam2') ;
catalogue.ajouterProduit('prod5', 104, 'fam1') ;

console.log(catalogue.chercherProduitParFamille('fam1'));
console.log(catalogue.chercherProduitParFamille('fam2'));

const client = new Client('Richard', 'pascal', 'adr1', 'tel1', 'email');
let ref = catalogue.chercherProduitParRef('prod1')
if (ref) {client.getPanier().ajouterLigne(ref, 2);}
ref = catalogue.chercherProduitParRef('prod2')
if (ref) {client.getPanier().ajouterLigne(ref, 5);}

console.log(client.getPanier());

client.getPanier().modifierLigne('prod1', 25)
console.log(client.getPanier());