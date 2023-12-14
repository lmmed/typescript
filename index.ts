import { Client } from "./model/Client";

// Exemple d'utilisation de la classe Client
const client1 = new Client("John", "Doe", "1 Rue Principale", "123456789", "john@example.com");
console.log("Coordonnées initiales :", client1);

// Modification des coordonnées du client
client1.changerCoordonnees("5 Rue Nouvelle", "987654321", "john.doe@example.com");
console.log("Nouvelles coordonnées :", client1);