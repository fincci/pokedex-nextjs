class Pokemon {
    name: string;
    abilities: Ability[];

    constructor(name: string, abilities: Ability[]) {
        this.name = name;
        this.abilities = abilities;
    }
}

class Ability {
    name: string;
    url: string;

    constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
    }
}
