import { Button, Input, Select } from "@mui/material";
import React, { useState } from "react";
import characterObject from "../../services/characterSchema";

export default function NewCharacterForm() {
  const [character, setCharacter] = useState({ ...characterObject });

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
