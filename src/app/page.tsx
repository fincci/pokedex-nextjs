"use client";

import { PokemonList } from "@/app/components/pokemonList";
import { PokemonService } from "@/app/services/pokemonService";
import { Main } from "./components/main";
import ThemeButton from "./components/themeButton/themeButton";

export default function Home() {
    const pokemonService = new PokemonService();

    return (
        <Main>
            <ThemeButton />
            <PokemonList fetchPokemons={pokemonService.fetch.getPokemonList} />
        </Main>
    );
}
