import { Grid } from "@mui/material";
import AbilityMods from "./AbilityMods";
import ActionButtons from "./ActionButtons";
import TopSection from "./TopSection";

export default function NewCharacterForm(props) {
  const {
    character,
    setCharacter,
    handleSave,
    handleChange,
    optionChange,
    handleAbilityModChange,
  } = props;
  return (
    <Grid container spacing={1} sx={{ width: "100%", marginTop: "1vh" }}>
      <Grid item xs={12}>
        <TopSection
          handleChange={handleChange}
          character={character}
          optionChange={optionChange}
        />
      </Grid>
      <Grid item xs={12}>
        <AbilityMods
          handleAbilityModChange={handleAbilityModChange}
          character={character}
        />
      </Grid>
      <Grid item xs={12}>
        <ActionButtons handleSave={handleSave} />
      </Grid>
    </Grid>
  );
}
