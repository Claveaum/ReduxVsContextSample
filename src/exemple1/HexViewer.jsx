import { Card } from "antd";

export function HexViewer({ color }) {
  return (
    <Card title="Couleur choisie (hex)" className="example-card">
      {color}
    </Card>
  );
}
