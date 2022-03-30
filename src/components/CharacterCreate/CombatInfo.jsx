import { Grid, TextField } from "@mui/material";
import React from "react";

export default function CombatInfo({ handleChange, character }) {
  return (
    <Grid container sx={{ width: "50%" }}>
      <Grid item xs={6}>
        <TextField
          label="Armor Class"
          name="armorclass"
          value={character.armorclass}
          onChange={(e) => handleChange(e)}
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Initiative"
          name="initiative"
          value={character.initiative}
          onChange={(e) => handleChange(e)}
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Speed"
          name="speed"
          value={character.speed}
          onChange={(e) => handleChange(e)}
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Hit Dice"
          name="hitdice"
          value={character.hitdice}
          onChange={(e) => handleChange(e)}
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Hit Points"
          name="hitpoints"
          value={character.hitdice}
          onChange={(e) => handleChange(e)}
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Temp Hit Points"
          name="temphp"
          value={character.hitdice}
          onChange={(e) => handleChange(e)}
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        />
      </Grid>
    </Grid>
  );
}
