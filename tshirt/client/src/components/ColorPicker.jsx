import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#FF0000",
          "#00FF00",
          "#0000FF",
          "#FFFF00",
          "#FF00FF",
          "#00FFFF",
          "#800080",
          "#808000",
          "#008080",
          "#808080",
          "#FF69B4",
          "#DA70D6",
          "#FFC0CB",
          "#FFD166",
          "#00CED1",
          "#20B2AA",
          "#48D1CC",
          "#00FA9A",
          "#F08080",
          "#FA8072",
        ]}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
