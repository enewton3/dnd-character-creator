import {
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function Equipment({ character, setCharacter }) {
  const equipmentArr = character.equipment;

  const addEquipment = () => {
    const newEquipmentArr = [
      ...equipmentArr,
      {
        name: "",
        quantity: "",
        category: "",
        equipped: false,
      },
    ];
    setCharacter((prev) => ({ ...prev, equipment: newEquipmentArr }));
  };

  const changeEquipment = (e, item, index) => {
    const { name, value } = e.target;
    console.log(e, item, index);
    console.log(name, value);

    const newEquipment = { ...item, [name]: value };

    let newEquipmentArr = equipmentArr;
    newEquipmentArr.splice(index, 1, newEquipment);

    setCharacter((prev) => ({ ...prev, equipment: newEquipmentArr }));
  };

  const removeEquipment = (index) => {
    let newEquipmentArr = equipmentArr;
    newEquipmentArr.splice(index, 1);
    setCharacter((prev) => ({ ...prev, equipments: newEquipmentArr }));
  };
  const handleCheckedChange = (e, item, index) => {
    const newEquipment = {
      ...item,
      equipped: !item.equipped,
    };

    let newEquipmentArr = equipmentArr;
    newEquipmentArr.splice(index, 1, newEquipment);

    setCharacter((prev) => ({ ...prev, equipment: newEquipmentArr }));
  };

  return (
    <Container>
      <Typography>Equipment</Typography>
      <Grid container sx={{ justifyContent: "center" }}>
        {equipmentArr.map((item, index) => (
          <Grid item key={`equipment${index}`}>
            <TextField
              value={item.name}
              name={"name"}
              label="Name"
              onChange={(e) => changeEquipment(e, item, index)}
            />
            <TextField
              value={item.quantity}
              name={"quantity"}
              label="Quantity"
              onChange={(e) => {
                changeEquipment(e, item, index);
              }}
            />
            <TextField
              value={item.description}
              name={"description"}
              label="Description"
              onChange={(e) => {
                changeEquipment(e, item, index);
              }}
            />
            <TextField
              value={item.category}
              name={"category"}
              label="Category"
              onChange={(e) => {
                changeEquipment(e, item, index);
              }}
            />
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={item.equipped}
                    size="small"
                    onChange={(e) => handleCheckedChange(e, item, index)}
                    name="equipped"
                  />
                }
                label="Equipped"
              />
            </FormGroup>
            <IconButton
              onClick={() => {
                removeEquipment(index);
              }}
            >
              <RemoveIcon />
            </IconButton>
          </Grid>
        ))}
        <IconButton onClick={addEquipment}>
          <AddIcon />
        </IconButton>
      </Grid>
    </Container>
  );
}
