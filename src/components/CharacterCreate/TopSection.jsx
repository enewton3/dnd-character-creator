import React from "react";
import { Autocomplete, Paper, TextField } from "@mui/material";

export default function TopSection() {
  return (
    <Paper
      sx={{
        width: "75vw",
        display: "flex",
        flexFlow: "row wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <TextField label="Character First Name" />
        <TextField label="Character Last Name" />
      </div>
      {/* first section */}
      <div>
        {/* class select */}
        <Autocomplete
          options={[]}
          renderInput={(params) => <TextField {...params} label="Class" />}
        />
        {/* background select */}
        <Autocomplete
          options={[]}
          renderInput={(params) => <TextField {...params} label="Background" />}
        />
        {/* Player name */}
        <TextField label="Player Name" />
        {/* race select */}
        <Autocomplete
          options={[]}
          renderInput={(params) => <TextField {...params} label="Race" />}
        />
        {/* Alignment select */}
        <Autocomplete
          options={[]}
          renderInput={(params) => <TextField {...params} label="Alignment" />}
        />
      </div>
    </Paper>
  );
}
