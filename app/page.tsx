"use client";
import { PokeCard } from "./components/PokeCard/PokeCard";
import { useRef } from "react";
import { useGetPokemon } from "./entities/pokemon/hooks";

export default function Home() {
  // if (process.env.NODE_ENV === "development") {
  //   return <PokeCard {...mockPokemon} />;
  // }

  const randomNumber = useRef<number>(Math.floor(Math.random() * 800) + 1);
  const { pokemon, loading } = useGetPokemon(randomNumber.current);
  console.log(pokemon, loading);

  if (loading) <div>Loading...</div>;

  return (
    <main
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {pokemon && <PokeCard pokemon={pokemon} />}
    </main>
  );
}
