"use client";

import { useEffect, useState } from "react";

interface IPokemonList {
    fetchPokemons: (offset: number, limit: number) => Promise<any[]>;
}

export const PokemonList: React.FC<IPokemonList> = ({ fetchPokemons }) => {
    const [data, setData] = useState<any[]>([]);
    const [page, setPage] = useState(0);
    const [mount, setMount] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const pokemonData = await fetchPokemons(page, 16);
            setData((prevData) => [...prevData, ...pokemonData]);
            setMount(true)
        };
        fetchData();
    }, []);
    
    if (!mount) return null
    console.log(data);
    
    return (
        <div>
            {data.map((pokemon, index) => (
                <div key={index}>{pokemon.name}</div>
            ))}
        </div>
    );
};
