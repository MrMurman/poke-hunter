import { useEffect, useState } from "react";
import { Pokemon } from "./types";
import { fetchMoves, fetchPokemon } from "./service";
import { mapPokemon } from "@/app/components/PokeCard/helpers";

export const useGetPokemon = (
  pokeID: number
): { pokemon: Pokemon | null; loading: boolean; error: unknown } => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchPokemonWithMoves = async () => {
      try {
        const data = await fetchPokemon(pokeID);
        const moves = await fetchMoves(data.moves);
        console.log({ data, moves });

        const fetchedPokemon = mapPokemon(data, moves);
        console.log({ fetchedPokemon });
        setPokemon(fetchedPokemon);
      } catch (err) {
        setError(err || "Unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonWithMoves();
  }, [pokeID]);

  return { pokemon, loading, error };
};