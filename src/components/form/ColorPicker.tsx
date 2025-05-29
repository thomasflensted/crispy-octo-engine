import InputContainer from "./InputContainer";
import { motion } from "framer-motion";
import { colorArray, noteColors, type Color } from "../../constants/colors";

type Props = {
  error?: string;
  selectedColor?: Color;
  onColorChange: (color: Color) => void;
};

const ColorPicker = ({ error, onColorChange, selectedColor = "red" }: Props) => {
  const isSelected = (c: Color) => c === selectedColor;

  return (
    <InputContainer id="color" label="Color" error={error}>
      <div className="flex gap-2 h-10 justify-between my-2">
        {colorArray.map((c) => (
          <motion.div
            initial={false}
            animate={{ scale: isSelected(c) ? 1.1 : 1 }}
            style={{ backgroundColor: noteColors[c] }}
            onClick={() => onColorChange(c)}
            key={c}
            className={`${isSelected(c) ? "shadow border" : ""} rounded-full h-full aspect-square cursor-pointer`}
          />
        ))}
      </div>
    </InputContainer>
  );
};

export default ColorPicker;
