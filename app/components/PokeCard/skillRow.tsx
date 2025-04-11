import React from "react";

import styles from "./pokeCard.module.css";
import { PokemonSkill } from "@/app/entities/pokemon/types";

export const SkillRow = ({
  skill,
  isLast,
}: {
  skill: PokemonSkill;
  isLast: boolean;
}) => {
  const { name, power, description } = skill;
  return (
    <>
    <hr className={styles.divider} />
      <div className={styles["skill-row"]}>
        <div className={styles.skill}>
          <span className={styles["skill-name"]}>{name}</span>
          <span className={styles["skill-value"]}>{power}</span>
        </div>
        <div className={styles["skill-description"]}>
          <span>
            {description}
          </span>
        </div>
      </div>
      {isLast && <hr className={styles.divider} />}
    </>
  );
};
