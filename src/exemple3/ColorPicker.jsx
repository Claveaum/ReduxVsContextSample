import { Card } from "antd";
import { HexColorPicker } from "react-colorful";
import { ColorContext } from "./ColorContext";

export function ColorPicker() {
  return (
    <Card title="Choisir une couleur" className="example-card">
      <ColorContext.Consumer>
        {({ color, setColor }) => (
          <HexColorPicker color={color} onChange={setColor} />
        )}
      </ColorContext.Consumer>
    </Card>
  );
}
