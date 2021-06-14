import { Card } from "antd";

export function TopRight({ color }) {
  return (
    <Card title="Couleur choisie (hex)" className="exemple1-card">
      {color}
    </Card>
  );
}
