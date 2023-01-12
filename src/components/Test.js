import { HexColorPicker } from "react-colorful";
import {useState} from "react";

const Test = () => {
    const [color, setColor] = useState("#aabbcc");
    return <HexColorPicker color={color} onChange={setColor} />;
};

export default Test