export interface EventInfo {
    contactInfo: ContactInformation;
    type: string;
    address: Address;
    date: Date;

}

export interface ContactInformation {
    firstName: string;
    lastName: string;
    email: string;
}

export interface Address {
    street: string;
    city: string;
    stateCode: string;
    zipCode: number;
}