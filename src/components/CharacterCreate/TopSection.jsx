import React from "react";
import { Box, Grid, Paper, TextField } from "@mui/material";
import OptionsAutocomplete from "./Utils/OptionsAutocomplete";
import {
  alignments,
  backgrounds,
  classes,
  races,
} from "../../services/characterResources";

export default function TopSection({ handleChange, character, optionChange }) {
  return (
    <Paper
      sx={{
        width: "95%",
        display: "flex",
        margin: "0 auto",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "2vh 1vw 2vh 1vw",
      }}
    >
      <Box
        sx={{
          width: "33%",
          display: "flex",
          flexFlow: "column wrap",
          margin: "0 1vw 0 0 ",
          // justifyContent: "space-between",
        }}
      >
        <TextField
          label="Character First Name"
          name="firstname"
          onChange={(e) => handleChange(e)}
          value={character.firstname}
        />
        <TextField
          label="Character Last Name"
          name="lastname"
          onChange={(e) => handleChange(e)}
          value={character.lastname}
        />
      </Box>
      {/* first section */}
      <Grid
        container
        spacing={0.5}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {/* class select */}
        <Grid item xs={4}>
          <OptionsAutocomplete
            options={classes}
            label="class"
            value={character.class}
            handleChange={handleChange}
            optionChange={optionChange}
            selectMultiple={false}
          />
        </Grid>
        {/* background select */}
        <Grid item xs={4}>
          <OptionsAutocomplete
            options={backgrounds}
            label="background"
            value={character.background}
            handleChange={handleChange}
            optionChange={optionChange}
            selectMultiple={false}
          />
        </Grid>
        {/* Player name */}
        <Grid item xs={4}>
          <TextField
            label="Player Name"
            name="playername"
            fullWidth
            onChange={(e) => handleChange(e)}
            value={character.playername}
          />
        </Grid>
        {/* race select */}
        <Grid item xs={6}>
          <OptionsAutocomplete
            label="race"
            options={races}
            value={character.race}
            handleChange={handleChange}
            optionChange={optionChange}
            selectMultiple={false}
          />
        </Grid>
        {/* Alignment select */}
        <Grid item xs={6}>
          <OptionsAutocomplete
            options={alignments}
            label="alignment"
            value={character.alignment}
            handleChange={handleChange}
            optionChange={optionChange}
            selectMultiple={false}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
