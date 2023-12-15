export interface ClientProps {
  nom: string;
  prenom: string;
  adresse: string;
  tel: string;
  email: string;
}

export interface IClient {
  changerCoordonnees(data: {
    nom: string;
    prenom: string;
    adresse: string;
    tel: string;
    email: string;
  }): void;
}

export class Client implements IClient {
  constructor(
    private nom: string,
    private prenom: string,
    private adresse: string,
    private tel: string,
    private email: string
  ) {
    this.nom = nom;
    this.prenom = prenom;
    this.adresse = adresse;
    this.tel = tel;
    this.email = email;
  }

  changerCoordonnees(client: {
    nom: string;
    prenom: string;
    adresse: string;
    tel: string;
    email: string;
  }) {
    const { nom, prenom, adresse, tel, email } = client;
    this.nom = nom;
    this.prenom = prenom;
    this.adresse = adresse;
    this.tel = tel;
    this.email = email;
  }
}
