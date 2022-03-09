export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentstyle = {
    // color: color,
    color,
    fontSize: "18px"
  };
  return <p style={contentstyle}>{children}</p>;
};

// export default ColorfulMessage;
