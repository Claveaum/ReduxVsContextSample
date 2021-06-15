import { Col, Row } from "antd";
import { ColorContextProvider } from "./ColorContext";
import { ColorPicker } from "./ColorPicker";
import "./exemple3.css";
import { HexViewer } from "./HexViewer";
import { RgbViewer } from "./RgbViewer";
import { VisualViewer } from "./VisualViewer";

const Exemple3 = () => {
  return (
    <ColorContextProvider defaultColor="#ccbbaa">
      <Row className="exemple1-first-line">
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

export default Exemple3;
