import { Grid, Paper } from "@mui/material";
import { useState } from "react";
import NewCharacterForm from "../components/CharacterCreate/NewCharacterForm";
import characterObject from "../services/characterSchema";

export default function CharacterCreate() {
  const [character, setCharacter] = useState({ ...characterObject });
  return <NewCharacterForm character={character} setCharacter={setCharacter} />;
}
