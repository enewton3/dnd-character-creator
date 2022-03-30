import { Grid, TextField } from "@mui/material";
import React from "react";

export default function BackgroundInfo({ character, setCharacter }) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    const newInfo = {
      name: name,
      content: value,
    };

    const info = character.characterInfo;
    const entryIndex = info.indexOf(name);

    info.splice(entryIndex, 1, newInfo);

    const newCharacter = { ...character, characterInfo: info };
    setCharacter((prev) => newCharacter);
  };

  return (
    <Grid container sx={{ width: "50%" }}>
      {character &&
        character.characterInfo.map((item) => (
          <Grid item xs={12} key={item.name}>
            <TextField
              label={item.name}
              name={item.name}
              value={item.content}
              onChange={(e) => handleChange(e)}
            />
          </Grid>
        ))}
    </Grid>
  );
}
