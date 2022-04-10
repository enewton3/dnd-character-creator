import { Grid, Typography } from "@mui/material";
import AbilityMods from "./AbilityMods";
import ActionButtons from "./ActionButtons";
import AttacksAndSpellcasting from "./AttacksAndSpellcasting";
import BackgroundInfo from "./BackgroundInfo";
import CombatInfo from "./CombatInfo";
import Equipment from "./Equipment";
import OtherProfs from "./OtherProfs";
import TopSection from "./TopSection";

export default function NewCharacterForm(props) {
  const { character, setCharacter, handleSave, handleChange, optionChange } =
    props;

  return (
    <Grid
      container
      spacing={1}
      sx={{
        width: "100%",
        marginTop: "1vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid item xs={12}>
        <TopSection
          handleChange={handleChange}
          character={character}
          optionChange={optionChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography>Ability Modifiers</Typography>
        <AbilityMods character={character} setCharacter={setCharacter} />
      </Grid>
      <Grid item xs={6}>
        <CombatInfo
          character={character}
          setCharacter={setCharacter}
          handleChange={handleChange}
        />
      </Grid>
      <Grid item xs={6}>
        <BackgroundInfo character={character} setCharacter={setCharacter} />
      </Grid>
      <Grid item xs={12}>
        <AttacksAndSpellcasting
          character={character}
          setCharacter={setCharacter}
        />
      </Grid>
      <Grid item xs={12}>
        <Equipment character={character} setCharacter={setCharacter} />
      </Grid>
      <Grid item xs={12}>
        <OtherProfs
          handleChange={handleChange}
          optionChange={optionChange}
          character={character}
          setCharacter={setCharacter}
        />
      </Grid>
      <Grid item xs={12}>
        <ActionButtons handleSave={handleSave} />
      </Grid>
    </Grid>
  );
}
