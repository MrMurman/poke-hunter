import { PokeCard, Pokemon } from "./components/PokeCard/PokeCard";

export default function Home() {
  const mockPokemon: Pokemon = {
    name: "SNORLAX",
    id: 143,
    hp: 90,
    imgUrl: "/assets/test_pokemon.png",
    description: "Sleeping Pokemon",
    skills: [
      {
        name: "Body Slam",
        power: 85,
        description:
          "Flip a coin. If heads, the Defending Pokémon is now paralyzed.",
      },
      {
        name: "Body Slam",
        power: 85,
        description:
          "Flip a coin. If heads, the Defending Pokémon is now paralyzed.",
      },
    ],

    stats: [
      {
        name: "Attack",
        value: 110,
      },
      {
        name: "Defense",
        value: 65,
      },
      {
        name: "Speed",
        value: 30,
      },
    ],
  };
  // if (process.env.NODE_ENV === "development") {
  //   return <PokeCard {...mockPokemon} />;
  // }
  return <PokeCard pokemon={mockPokemon} />;
}
