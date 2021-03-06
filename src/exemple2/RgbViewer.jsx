import { Card } from "antd";
import { useContext } from "react";
import { ColorContext } from "./ColorContext";

export function RgbViewer() {
  const { color } = useContext(ColorContext);

  const rgb = hexToRgb(color);
  return (
    <Card title="Couleur choisie (rgb)" className="example-card">
      <ul>
        <li>Rouge: {rgb.r}</li>
        <li>Vert: {rgb.g}</li>
        <li>Bleu: {rgb.b}</li>
      </ul>
    </Card>
  );
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}
