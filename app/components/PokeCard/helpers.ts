"use client";
import {
  FetchedPokemon,
  FetchedPokemonSkills,
  Pokemon,
} from "@/app/entities/pokemon/types";

export const mapPokemon = (
  data: FetchedPokemon,
  moves: FetchedPokemonSkills[]
): Pokemon => {
  const filteredStats = [data.stats[1], data.stats[2], data.stats[5]];
  const pokeType = String(data.types[0].type.name)
    .split("")
    .map((letter, index) => (index === 0 ? letter.toUpperCase() : letter))
    .join("");

  return {
    name: data.name.toUpperCase(),
    id: data.id,
    hp: data.stats[0].base_stat,
    imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
    description: `${pokeType} pokemon`,
    type: pokeType,
    skills: moves.map((move) => {
      return {
        name:
          move.names.find((name) => name.language.name === "en")?.name ||
          "Name not found",
        power: move.power,
        description:
          move.flavor_text_entries.find((entry) => entry.language.name === "en")
            ?.flavor_text || "Description not found",
      };
    }),
    stats: filteredStats.map((stat) => {
      return {
        name: stat.stat.name,
        value: stat.base_stat,
      };
    }),
  };
};
