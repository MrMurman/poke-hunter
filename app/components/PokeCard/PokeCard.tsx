"use client";
import React from "react";

import styles from "./pokeCard.module.css";
import Image from "next/image";
import { SkillRow } from "./skillRow";
import { StatsItem } from "./statsItem";

export interface Pokemon {
  name: string;
  id: number;
  hp: number;
  imgUrl: string;
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

export const PokeCard = ({ pokemon }: { pokemon: Pokemon }) => {
  const { name, id, hp, imgUrl, description, skills, stats } = pokemon;

  return (
    <div id="card" className={styles.card}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles["pokemon-name"]}>{name}</span>
          <span className={styles["pokemon-hp"]}>
            <span className={styles["pokemon-hp-value"]}>{hp}</span>
            <span className={styles["pokemon-hp-text"]}> HP</span>
          </span>
        </div>

        <Image
          width="100"
          height="100"
          className={styles.pokemon}
          src={imgUrl}
          alt="pokemon"
        />

        <div className={styles["pokemon-description"]}>{description}</div>

        <div className={styles.body}>
          {skills.map((skill, index) => (
            <SkillRow
              key={index}
              skill={skill}
              isLast={index === skills.length - 1}
            />
          ))}
        </div>

        <div className={styles.spacer} />

        <div className={styles.footer}>
          <div className={styles["pokemon-number"]}>
            <span className={styles["label-text"]}>№:</span>
            <span className={styles["label-number"]}>{id}</span>
          </div>

          <div className={styles["stat-row"]}>
            {stats.map((stat, index) => (
              <StatsItem key={index} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
