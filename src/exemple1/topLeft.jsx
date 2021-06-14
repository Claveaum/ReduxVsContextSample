import { Card } from "antd";
import { HexColorPicker } from "react-colorful";

export function TopLeft({ color, setColor }) {
  return (
    <Card title="Choisir une couleur" className="exemple1-card">
      <HexColorPicker color={color} onChange={setColor} />
    </Card>
  );
}
