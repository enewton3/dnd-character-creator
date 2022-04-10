import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function OptionsAutocomplete(props) {
  const { options, label, optionChange, selectMultiple } = props;

  const niceLabel = `${label[0].toUpperCase()}${label.slice(1, label.length)}`;

  const [selectValue, setSelectValue] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    optionChange(label, selectValue);
  }, [selectValue]);

  return (
    <Autocomplete
      multiple={selectMultiple}
      id={`${label} select`}
      options={options}
      value={selectValue}
      name={label}
      onChange={(e, newValue) => {
        setSelectValue(newValue);
      }}
      getOptionLabel={(option) => `${option}`}
      inputValue={inputValue}
      onInputChange={(e, selected) => {
        setInputValue(selected);
      }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label={niceLabel} name={label} />
      )}
    />
  );
}
