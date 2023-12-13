import { IPanier } from "./commande";

export interface IClient {
    changerCoordonnees(): void;
    getPanier(): IPanier;
}