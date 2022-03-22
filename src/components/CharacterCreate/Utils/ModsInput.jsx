import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

export default function ModsInput(props) {
  const { mod, handleAbilityModChange } = props;

  const [newMod, setNewMod] = useState(mod);

  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(value, name);
    setNewMod((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckedChange = (e) => {
    const { name, checked } = e.target;
    console.log(name, checked);
    setNewMod((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <Box>
      <TextField
        label={mod.name}
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        onChange={(e) => handleChange(e)}
        name="value"
      />
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={newMod.prof}
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
