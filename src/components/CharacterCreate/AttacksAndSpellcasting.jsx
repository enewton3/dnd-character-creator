import {
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function AttacksAndSpellcasting({ character, setCharacter }) {
  const { attacks } = character;

  const addAttack = () => {
    const newAttacks = [...attacks, { name: "", bonus: "", damage: "" }];
    setCharacter((prev) => ({ ...prev, attacks: newAttacks }));
  };

  const changeAttack = (e, item, index) => {
    const { name, value } = e.target;
    console.log(e, item, index);
    console.log(name, value);

    const newAttack = { ...item, [name]: value };

    let newAttacks = attacks;
    newAttacks.splice(index, 1, newAttack);

    setCharacter((prev) => ({ ...prev, attacks: newAttacks }));
  };

  const removeAttack = (index) => {
    let newAttacks = attacks;
    newAttacks.splice(index, 1);
    setCharacter((prev) => ({ ...prev, attacks: newAttacks }));
  };

  return (
    <Container>
      <Typography>Attacks and Spellcasting</Typography>
      <Grid container sx={{ justifyContent: "center" }}>
        {attacks.map((item, index) => (
          <Grid item key={`attack${index}`}>
            <TextField
              value={item.name}
              name={"name"}
              onChange={(e) => changeAttack(e, item, index)}
              label="Name"
            />
            <TextField
              value={item.bonus}
              name={"bonus"}
              label="Bonus"
              onChange={(e) => {
                changeAttack(e, item, index);
              }}
            />
            <TextField
              value={item.damage}
              name={"damage"}
              label="Damage/Type"
              onChange={(e) => {
                changeAttack(e, item, index);
              }}
            />
            <IconButton
              onClick={() => {
                removeAttack(index);
              }}
            >
              <RemoveIcon />
            </IconButton>
          </Grid>
        ))}
        <IconButton onClick={addAttack}>
          <AddIcon />
        </IconButton>
      </Grid>
    </Container>
  );
}
