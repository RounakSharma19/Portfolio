export const Render = (props) => {
  return props.if ? props.children : null;
};
