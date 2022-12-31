import React from "react";
import { Badge } from "reactstrap";

const Badges = ({ children, styleInfo }) => {
  const colorKey = {
    Fashion: "primary",
    Travel: "success",
    Fitness: "danger",
    Food: "warning",
    Tech: "info",
    Sports: "dark",
  };

  return (
      <h5 style={styleInfo}>
        <Badge color={colorKey[children]}>{children}</Badge>
      </h5>
  );
};

export default Badges;
