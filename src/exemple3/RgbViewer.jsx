import { Card } from "antd";
import { useContext } from "react";
import { ColorContext } from "./ColorContext";

export function RgbViewer() {
  const { getRgb } = useContext(ColorContext);

  const [r, g, b] = getRgb();
  return (
    <Card title="Couleur choisie (rgb)" className="example-card">
      <ul>
        <li>Rouge: {r}</li>
        <li>Vert: {g}</li>
        <li>Bleu: {b}</li>
      </ul>
    </Card>
  );
}
