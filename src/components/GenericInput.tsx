import React, { useState } from "react";
import { useField } from "react-final-form-hooks";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

interface IGenericInput {
  type: string;
  label: string;
  name: string;
  options?: string[];
  form: any;
}

const GenericInput: React.SFC<IGenericInput> = (props) => {
  const { type, label, options = [], name, form } = props;

  const field = useField(name, form);

  const [value, setValue] = useState<string | null>(field.input.value);
  const [inputValue, setInputValue] = useState(field.input.value);

  console.log("field", field);

  return (
    <div>
      {type === "text" ? (
        <div>
          <TextField
            id={field.input.name}
            label={label}
            variant="outlined"
            size="small"
            value={field.input.value}
            onChange={field.input.onChange}
            style={{
              width: "300px",
              margin: "10px 0 0 10px",
            }}
          ></TextField>
        </div>
      ) : type === "dropDown" && options ? (
        <div>
          <Autocomplete
            value={value}
            onChange={(event: any, newValue: string | null) => {
              setValue(newValue);
              field.input.onChange(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={options}
            style={{ width: "300px", margin: "10px 0 0 10px" }}
            renderInput={(params) => (
              <TextField {...params} label={label} variant="outlined" />
            )}
            size={"small"}
            getOptionSelected={(option, value) =>
              value === "" || value === option
            }
          />
        </div>
      ) : (
        <div>no matching type</div>
      )}
    </div>
  );
};

export default GenericInput;
