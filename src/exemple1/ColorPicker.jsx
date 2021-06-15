import { Card } from "antd";
import { HexColorPicker } from "react-colorful";

export function ColorPicker({ color, setColor }) {
  return (
    <Card title="Choisir une couleur" className="example-card">
      <HexColorPicker color={color} onChange={setColor} />
    </Card>
  );
}
