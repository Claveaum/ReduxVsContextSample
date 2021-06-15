import { Card } from "antd";
import { useContext } from "react";
import { ColorContext } from "./ColorContext";

export function VisualViewer() {
  const { color } = useContext(ColorContext);

  return (
    <Card title="Couleur choisie (visuel)" className="example-card">
      <div style={{ height: 100, width: 100, backgroundColor: color }}></div>
    </Card>
  );
}
