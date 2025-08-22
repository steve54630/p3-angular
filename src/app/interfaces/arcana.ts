export class Arcana  {
    name: string;
    number: number;
    image: string;
    key : string;
    phrase: string;

    constructor(name: string, number: number, image: string, key: string, phrase: string) {
        this.name = name;
        this.number = number;
        this.image = image;
        this.key = key;
        this.phrase = phrase;
    }
}
