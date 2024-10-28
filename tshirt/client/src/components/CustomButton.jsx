import { useSnapshot } from "valtio";
import PropTypes from "prop-types";

import state from "../store";
import { getContrastingColor } from "../config/helpers";

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return {
        borderwidth: "1px",
        borderColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    }
  };
  return (
    <button
      className={`px-2 py-1.2 flex-1 rounded-md ${customStyles} `}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

CustomButton.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  customStyles: PropTypes.string,
  handleClick: PropTypes.func,
};

export default CustomButton;
