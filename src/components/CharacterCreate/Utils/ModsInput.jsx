import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function ModsInput(props) {
  const { mod, setCharacter, character } = props;

  const handleCheckedChange = (e) => {
    const newMod = {
      name: mod.name,
      value: mod.value,
      prof: !mod.prof,
      shortName: mod.shortName,
    };

    const mods = character.mods;
    const modIndex = mods.indexOf(mod);
    mods.splice(modIndex, 1, newMod);

    const newCharacter = { ...character, mods: mods };

    setCharacter((prev) => newCharacter);
  };

  const handleChange = (e) => {
    const { value } = e.target;

    const newMod = {
      name: mod.name,
      value: value,
      prof: mod.prof,
      shortName: mod.shortName,
    };

    const mods = character.mods;
    const modIndex = mods.indexOf(mod);

    mods.splice(modIndex, 1, newMod);

    const newCharacter = { ...character, mods: mods };
    setCharacter((prev) => newCharacter);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField
        label={mod.name}
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        onChange={(e) => handleChange(e)}
        name="value"
        // sx={{ width: "30%" }}
      />
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={mod.prof}
              size="small"
              onChange={(e) => handleCheckedChange(e)}
              name="prof"
            />
          }
          label="Proficient"
        />
      </FormGroup>
    </Box>
  );
}
