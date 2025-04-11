export interface Pokemon {
  name: string;
  id: number;
  hp: number;
  imgUrl: string;
  type: string;
  description: string;
  skills: PokemonSkill[];
  stats: PokemonStat[];
}

export interface PokemonSkill {
  name: string;
  power: number;
  description: string;
}

export interface PokemonStat {
  name: string;
  value: number;
}

// TODO: types and DTOs should be separate
export type FetchedPokemonMove = { move: { url: string } };
export interface FetchedPokemonSkills {
  names: {
    language: { name: string };
    name: string;
  }[];
  power: number;
  flavor_text_entries: {
    language: { name: string };
    flavor_text: string;
  }[];
}

export interface FetchedPokemon {
  name: string
  id: number
  stats: { stat: {name: string}; base_stat: number }[];
  types: { type: { name: string } }[];

}
