import { Col, Row } from "antd";
import { useState } from "react";
import { ColorPicker } from "./ColorPicker";
import { HexViewer } from "./HexViewer";
import { RgbViewer } from "./RgbViewer";
import { VisualViewer } from "./VisualViewer";

const Exemple1 = () => {
  const [color, setColor] = useState("#aabbcc");

  return (
    <>
      <Row className="exemple-first-line">
        <Col span={12}>
          <ColorPicker color={color} setColor={setColor} />
        </Col>
        <Col span={12}>
          <HexViewer color={color} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <VisualViewer color={color} />
        </Col>
        <Col span={12}>
          <RgbViewer color={color} />
        </Col>
      </Row>
    </>
  );
};

export default Exemple1;
