import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { mapType, mapSize } from "./helpers";

import "./Icon.css";

const Icon = ({ type, size }) => (
  <div>
    <img src={mapType(type)} />
  </div>
);

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};

Icon.defaultProps = {
  size: "md",
};

export default Icon;
