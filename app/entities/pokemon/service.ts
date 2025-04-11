"use client";

import { FetchedPokemonMove, FetchedPokemonSkills } from "./types";
import { mapPokemon } from "@/app/components/PokeCard/helpers";

export const fetchPokemon = async (pokeID: number) => {
  const baseURL = "https://pokeapi.co/api/v2/pokemon/";
  const pokemonURL = baseURL + pokeID;

  return await fetch(pokemonURL).then((response) => response.json());
};

export const fetchMoves = async (
  moves: FetchedPokemonMove[]
): Promise<FetchedPokemonSkills[]> => {
  const movesArray = new Array(2).fill(1).map(() => {
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex].move.url;
  });

  console.log({ movesArray });

  const fetchedMoves = await Promise.all(
    movesArray.map((url) => fetch(url).then((res) => res.json()))
  );

  return fetchedMoves;
};

// TODO: move this logic to custom hook or store
export const fetchPokemonWithMoves = async (pokeID: number) => {
  const data = await fetchPokemon(pokeID);
  const moves = await fetchMoves(data.moves);

  return mapPokemon(data, moves);
};
