import { Col, Row } from "antd";
import { ColorContextProvider } from "./ColorContext";
import { ColorPicker } from "./ColorPicker";
import { HexViewer } from "./HexViewer";
import { RgbViewer } from "./RgbViewer";
import { VisualViewer } from "./VisualViewer";

const Exemple2 = () => {
  return (
    <ColorContextProvider>
      <Row className="exemple-first-line">
        <Col span={12}>
          <ColorPicker />
        </Col>
        <Col span={12}>
          <HexViewer />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <VisualViewer />
        </Col>
        <Col span={12}>
          <RgbViewer />
        </Col>
      </Row>
    </ColorContextProvider>
  );
};

export default Exemple2;
