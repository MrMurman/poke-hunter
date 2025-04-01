import React from "react";

import styles from "./pokeCard.module.css";
import { PokemonStat } from "./PokeCard";

export const StatsItem = ({ stat }: { stat: PokemonStat }) => {
  const { name, value } = stat;

  return (
    <div className={styles["stat-item"]}>
      <span className={styles["stat-name"]}>{name}</span>
      <span className={styles["stat-value"]}>{value}</span>
    </div>
  );
};
