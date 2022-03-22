import { Grid } from "@mui/material";
import React from "react";
import ModsInput from "./Utils/ModsInput";

export default function AbilityMods({ character, setCharacter }) {
  const { mods } = character;

  return (
    <Grid container>
      {mods.map((mod) => (
        <Grid item key={mod.name}>
          <ModsInput
            mod={mod}
            // handleAbilityModChange={handleAbilityModChange}
            setCharacter={setCharacter}
            character={character}
          />
        </Grid>
      ))}
    </Grid>
  );
}
