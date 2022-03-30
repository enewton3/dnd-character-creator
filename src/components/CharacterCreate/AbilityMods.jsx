import { Grid } from "@mui/material";
import React from "react";
import ModsInput from "./Utils/ModsInput";

export default function AbilityMods({ character, setCharacter }) {
  const { mods } = character;

  return (
    <Grid
      container
      spacing={0.5}
      sx={{ alignItems: "center", justifyContent: "center", margin: "0 auto" }}
    >
      {mods.map((mod) => (
        <Grid item key={mod.name} xs={2}>
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
