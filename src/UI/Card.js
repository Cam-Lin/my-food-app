const Card = (props) => {
  const classes = "mx-4 bg-gray-300 border-2 rounded " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
