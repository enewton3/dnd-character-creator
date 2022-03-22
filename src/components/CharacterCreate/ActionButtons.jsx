import { Button } from "@mui/material";
import React from "react";

export default function ActionButtons({ handleSave }) {
  return (
    <div>
      <Button variant="outlined" onClick={handleSave}>
        Save
      </Button>
      <Button variant="outlined">Print Sheet</Button>
    </div>
  );
}
