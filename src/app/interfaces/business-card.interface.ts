export interface IBusinessCard {
    firstName: string;
    lastName: string;
    email: string;
    photoUrl: string;
    whatsapp?: string;
    contactMethods?: IContactMethods[];
}

export interface IContactMethods {
    name: string;
    link: string;
}