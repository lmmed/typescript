import {Client} from './model/Client';
import { ClientTypes } from './types/client.types';
import { ProductTypes } from './types/product.types';
import { Product } from './model/Product';

const clientData: ClientTypes = {
    firstName: "Pierre",
    lastName: "BAGUET",
    phone: "0102030405",
    address: "5 rue jean Rochon, Clermont-Ferrand",
    email: "pbaguet@openstudio.fr"
}

const productData : ProductTypes = {
    description: "Peugeot 208",
    stockQuantity: 10,
    reference: 10100129381,
    price: 10203,
}

const client = new Client(
        clientData.firstName,
        clientData.lastName,
        clientData.phone,
        clientData.address,
        clientData.email
);
const product1 = new Product(
    productData.description,
    productData.stockQuantity,
    productData.reference,
    productData.price
);

console.log(client);

client.changeCoordinates('1 avenue des Champs Elysées, Paris', '0102030404', 'pbaguet@openstudio.com');

console.log(client);


console.log(product1);

product1.addQuantity(10);
product1.removeQuantity(54);
product1.checkLowStockThreshold(2);