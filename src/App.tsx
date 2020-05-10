import React from "react";
import "./App.css";
import Form from "./components/Form";
import Box from "@material-ui/core/Box";

function App() {
  return (
    <div className="App">
      <div style={{ width: "100%" }}>
        <Box
          display="flex"
          p={5}
          bgcolor="background.paper"
          justifyContent="center"
        >
          <Form />
        </Box>
      </div>
    </div>
  );
}

export default App;
