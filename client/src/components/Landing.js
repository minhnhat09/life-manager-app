import React from "react";
import { Link } from "react-router-dom";
import Button from "material-ui/Button";


const Landing = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Link to="/spending">
        <Button>Spending page </Button>
      </Link>
    </div>
  );
};

export default Landing;
