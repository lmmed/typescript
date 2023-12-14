import { Product } from "./Product";

class Catalog {
    private products: Product[];
  
    constructor() {
      this.products = [];
    }
  
    // Fonction pour chercher un produit par référence
    findProductByReference(reference: string): Product | undefined {
      return this.products.find(product => product.reference === reference);
    }
  
    // Fonction pour chercher un produit par description
    findProductByDescription(description: string): Product[] {
      return this.products.filter(product => product.description.includes(description));
    }
  
    // Fonction pour chercher un produit par catégorie
    findProductByCategory(category: string): Product[] {
      return this.products.filter(product => product.category === category);
    }
  
    // Fonction pour changer le produit (référence, prix)
    updateProduct(reference: string, newReference: string, newPrice: number): void {
      const index = this.products.findIndex(product => product.reference === reference);
  
      if (index !== -1) {
        this.products[index].reference = newReference;
        this.products[index].price = newPrice;
        console.log(`Product updated: ${JSON.stringify(this.products[index])}`);
      } else {
        console.log(`Product with reference ${reference} not found.`);
      }
    }
  
    // Fonction pour ajouter un produit (référence, prix, catégorie)
    addProduct(newReference: string, description: string, price: number, category: string): void {
      const newProduct: Product = {
        reference: newReference,
        description: description,
        price: price,
        category: category,
      };
  
      this.products.push(newProduct);
      console.log(`Product added: ${JSON.stringify(newProduct)}`);
    }
  
    // Fonction pour supprimer un produit par référence
    deleteProduct(reference: string): void {
      const index = this.products.findIndex(product => product.reference === reference);
  
      if (index !== -1) {
        const deletedProduct = this.products.splice(index, 1)[0];
        console.log(`Product deleted: ${JSON.stringify(deletedProduct)}`);
      } else {
        console.log(`Product with reference ${reference} not found.`);
      }
    }
  
    // Fonction pour afficher tous les produits
    getAllProducts(): Product[] {
      return this.products;
    }
  }
  