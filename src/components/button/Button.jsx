import React from "react";
import ProTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      className={`btn ${props.className}`}
      onclick={props.onclick ? () => props.onclick() : null}
    >
      {props.children}
    </button>
  );
};

const OutlineButton = (props) => {
  return (
    <Button
      className={`btn-outline ${props.className}`}
      onclick={props.onclick ? () => props.onclick() : null}
    ></Button>
  );
};

Button.ProTypes = {
  onclick: ProTypes.func,
};

export default Button;
