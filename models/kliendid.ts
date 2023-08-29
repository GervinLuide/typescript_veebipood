

export interface Klient {
    id: number;
    nimi: string;
    kontaktandmed: Kontaktandmed;
    aadress: Aadress;
}

export interface Kontaktandmed {
    telefoninumber: string;
    email: string;
}

export interface Aadress {
    tanav: string;
    maja: string;
    linn: string;
    postiindeks: string;
}

