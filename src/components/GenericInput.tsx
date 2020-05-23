import React, { useState } from "react";
import { useField } from "react-final-form-hooks";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

// split out type to separate interface

interface IGenericInput {
  type: string;
  label: string;
  name: string;
  options?: string[];
  form: any;
  validators?: any;
}

const GenericInput: React.SFC<IGenericInput> = (props) => {
  const { type, label, options = [], name, form, validators } = props;

  const { meta, input } = useField(name, form, validators);

  const [value, setValue] = useState<string | null>(input.value);
  const [inputValue, setInputValue] = useState(input.value);

  return (
    <div>
      {type === "text" ? (
        <div>
          <TextField
            id={input.name}
            label={label}
            variant="outlined"
            size="small"
            value={input.value}
            onChange={input.onChange}
            style={{
              width: "300px",
              margin: "10px 0 0 10px",
            }}
            error={!!meta.error}
            helperText={meta.error}
          ></TextField>
        </div>
      ) : type === "dropdown" && options ? (
        <div>
          <Autocomplete
            value={value}
            onChange={(event: any, newValue: string | null) => {
              setValue(newValue);
              input.onChange(newValue);
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
