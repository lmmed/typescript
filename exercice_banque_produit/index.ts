import {Client} from '../exercice_banque_produit/model/Client';
import { ClientTypes } from './types/client.types';

const clientData: ClientTypes = {
    firstName: "Pierre",
    lastName: "BAGUET",
    phone: "0102030405",
    address: "5 rue jean Rochon, Clermont-Ferrand",
    email: "pbaguet@openstudio.fr"
}

const client = new Client(
        clientData.firstName,
        clientData.lastName,
        clientData.phone,
        clientData.address,
        clientData.email
)

console.log(client);

client.changeCoordinates('1 avenue des Champs Elysées, Paris', '0102030404', 'pbaguet@openstudio.com');

console.log(client);