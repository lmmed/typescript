export class Client {
    constructor( 
        public firstName: string, 
        public lastName: string,
        public adresse: string,
        public tel: string,
        public email: string
      ) {} 

      changerCoordonnees(nouvelleAdresse: string, nouveauTel: string, nouvelEmail: string): void {
        this.adresse = nouvelleAdresse;
        this.tel = nouveauTel;
        this.email = nouvelEmail;
      }
}
