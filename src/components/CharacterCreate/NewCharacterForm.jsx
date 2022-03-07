import { Button, Input, Select } from "@mui/material";


export default function NewCharacterForm({ character, setCharacter }) {
  return (
    <form>
      {/* name */}
      <div>
        <Input />
        <Input />
      </div>
      {/* first section */}
      <div>
        {/* class select */}
        <Select></Select>
        {/* background select */}
        <Select></Select>
        {/* Player name */}
        <Input />
        {/* race select */}
        <Select></Select>
        {/* Alignment select */}
        <Select></Select>
      </div>
      {/* options */}
      <div></div>

      {/* action buttons */}
      <div>
        <Button variant="outlined">Save</Button>
        <Button variant="outlined">Print Sheet</Button>
      </div>
    </form>
  );
}
