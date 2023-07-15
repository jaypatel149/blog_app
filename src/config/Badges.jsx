/* eslint-disable react/prop-types */

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
      <span className={`badge bg-${colorKey[children]} text-white`}>{children}</span>
    </h5>
  );
};

export default Badges;


