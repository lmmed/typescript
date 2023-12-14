"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Client_1 = require("../exercice_banque_produit/model/Client");
var clientData = {
    firstName: "Pierre",
    lastName: "BAGUET",
    phone: "0102030405",
    address: "5 rue jean Rochon, Clermont-Ferrand",
    email: "pbaguet@openstudio.fr"
};
var client = new Client_1.Client(clientData.firstName, clientData.lastName, clientData.phone, clientData.address, clientData.email);
console.log(client);
client.changeCoordinates('1 avenue des Champs Elysées, Paris', '0102030404', 'pbaguet@openstudio.com');
console.log(client);
