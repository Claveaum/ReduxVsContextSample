import { Card } from "antd";

export function VisualViewer({ color }) {
  return (
    <Card title="Couleur choisie (visuel)" className="example-card">
      <div style={{ height: 100, width: 100, backgroundColor: color }}></div>
    </Card>
  );
}
