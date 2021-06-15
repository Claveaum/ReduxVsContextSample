import { Card } from "antd";
import { useContext } from "react";
import { ColorContext } from "./ColorContext";

export function HexViewer() {
  const { color } = useContext(ColorContext);

  return (
    <Card title="Couleur choisie (hex)" className="example-card">
      {color}
    </Card>
  );
}
