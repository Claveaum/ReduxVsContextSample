import { Card } from "antd";
import { useContext } from "react";
import { HexColorPicker } from "react-colorful";
import { ColorContext } from "./ColorContext";

export function ColorPicker() {
  const { color, setColor } = useContext(ColorContext);

  return (
    <Card title="Choisir une couleur" className="example-card">
      <HexColorPicker color={color} onChange={setColor} />
    </Card>
  );
}
