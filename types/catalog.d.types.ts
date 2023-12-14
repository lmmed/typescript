import { Product } from "../model/Product";

export type Catalog = {
    products: Product[];
    
    // Fonction pour chercher un produit par référence
    findProductByReference(reference: string): Product | undefined;
  
    // Fonction pour chercher un produit par description
    findProductByDescription(description: string): Product[];
  
    // Fonction pour chercher un produit par catégorie
    findProductByCategory(category: string): Product[];
  
    // Fonction pour changer le produit (référence, prix)
    updateProduct(reference: string, newReference: string, newPrice: number): void;
  
    // Fonction pour ajouter un produit (référence, prix, catégorie)
    addProduct(newReference: string, description: string, price: number, category: string): void;
  
    // Fonction pour supprimer un produit par référence
    deleteProduct(reference: string): void;
};