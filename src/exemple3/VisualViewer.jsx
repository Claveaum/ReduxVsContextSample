import { Button, Card } from "antd";
import { useContext } from "react";
import { ColorContext } from "./ColorContext";

export function VisualViewer() {
  const { color, lighten, darken } = useContext(ColorContext);

  return (
    <Card title="Couleur choisie (visuel)" className="example-card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div style={{ height: 100, width: 100, backgroundColor: color }}></div>
        <div>
          <Button onClick={() => lighten(0.1)}>Éclaircir</Button>
          <Button onClick={() => darken(0.1)}>Assombrir</Button>
        </div>
      </div>
    </Card>
  );
}
