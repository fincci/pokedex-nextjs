interface VariablesApi {
    baseUrl: string;
    load: number;
    limit: number;
}

const variables: VariablesApi = {
    baseUrl: `https://pokeapi.co/api/v2`,
    load: 16,
    limit: 16,
};

export interface PokemonServiceInterface {
    fetch: {
        getPokemonList(offset: number, limit: number): Promise<any>;
        getPokemon(name: string): Promise<any>;
    };
}

export class PokemonService implements PokemonServiceInterface {
    private async fetchFromApi(url: string): Promise<any> {
        try {
            const response = await fetch(url);
            return response.json();
        } catch (error) {
            throw new Error(`Failed to fetch: ${error}`);
        }
    }

    public fetch = {
        getPokemonList: async (
            offset: number,
            limit: number
        ): Promise<any[]> => {
            const url = `${variables.baseUrl}/pokemon/?offset=${offset}&limit=${limit}`;
            try {
                const data = await this.fetchFromApi(url);
                return data.results;
            } catch (error) {
                throw new Error("Invalid data format");
            }
        },
        getPokemon: async (name: string): Promise<any[]> => {
            const url = `${variables.baseUrl}/pokemon/${name}`;
            try {
                const data = await this.fetchFromApi(url);
                return data.results;
            } catch (error) {
                throw new Error("Invalid data format");
            }
        },
    };
}
