import { Container, TextField } from "@mui/material";
import React from "react";
import { languages } from "../../services/characterResources";
import OptionsAutocomplete from "./Utils/OptionsAutocomplete";

export default function OtherProfs(props) {
  const { character, handleChange, optionChange } = props;

  return (
    <Container>
      <OptionsAutocomplete
        options={languages.map((item) => item.name)}
        label="languages"
        value={character.languages}
        handleChange={handleChange}
        optionChange={optionChange}
        selectMultiple={true}
      />
      <TextField
        multiline
        rows={10}
        sx={{ width: "100%" }}
        label="Notes"
        name="notes"
        onChange={(e) => handleChange(e)}
      />
    </Container>
  );
}
