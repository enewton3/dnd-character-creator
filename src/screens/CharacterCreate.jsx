import { useState } from "react";
import NewCharacterForm from "../components/CharacterCreate/NewCharacterForm";
import characterObject from "../services/characterResources/characterSchema";

export default function CharacterCreate() {
  const [character, setCharacter] = useState({ ...characterObject });

  const handleSave = () => {
    console.log("clicked");
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCharacter((prevState) => ({ ...prevState, [name]: value }));
  };

  const optionChange = (label, value) => {
    setCharacter((prev) => ({ ...prev, [label]: value }));
  };

  return (
    <NewCharacterForm
      character={character}
      setCharacter={setCharacter}
      handleSave={handleSave}
      handleChange={handleChange}
      optionChange={optionChange}
    />
  );
}
