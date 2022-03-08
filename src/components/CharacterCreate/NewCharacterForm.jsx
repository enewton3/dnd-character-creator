import {
  Autocomplete,
  Button,
  Grid,
  Input,
  Select,
  TextField,
} from "@mui/material";
import AbilityMods from "./AbilityMods";
import ActionButtons from "./ActionButtons";
import TopSection from "./TopSection";

export default function NewCharacterForm({ character, setCharacter }) {
  return (
    <form>
      <Grid container spacing={2}>
        {/* name */}
        <Grid item xs={8}>
          <TopSection />
        </Grid>

        <AbilityMods />

        {/* action buttons */}
        <ActionButtons />
      </Grid>
    </form>
  );
}
