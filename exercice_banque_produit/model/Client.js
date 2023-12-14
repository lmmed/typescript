"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var Client = /** @class */ (function () {
    function Client(firstName, lastName, address, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
    Client.prototype.changeCoordinates = function (newAddress, newPhone, newEmail) {
        this.address = newAddress;
        this.phone = newPhone;
        this.email = newEmail;
    };
    return Client;
}());
exports.Client = Client;
