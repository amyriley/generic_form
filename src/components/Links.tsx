import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";

const Links = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      m={1}
      p={1}
      bgcolor="background.paper"
    >
      <Box p={1} bgcolor="grey.300">
        <Link to="/management" className="link">
          Profile
        </Link>
      </Box>
      <Box p={1} bgcolor="grey.300">
        <Link to="/management/comments" className="link">
          Comments
        </Link>
      </Box>
      <Box p={1} bgcolor="grey.300">
        <Link to="/management/contact" className="link">
          Contact
        </Link>
      </Box>
      <Box p={1} bgcolor="grey.300">
        <Link to="/management/form" className="link">
          Form
        </Link>
      </Box>
    </Box>
  );
};

export default Links;
