import { Col, Row } from "antd";
import { useState } from "react";
import { BottomLeft } from "./bottomLeft";
import { BottomRight } from "./bottomRight";
import "./exemple1.css";
import { TopLeft } from "./topLeft";
import { TopRight } from "./topRight";

const Exemple1 = () => {
  const [color, setColor] = useState("#aabbcc");

  return (
    <>
      <Row className="exemple1-first-line">
        <Col span={12}>
          <TopLeft color={color} setColor={setColor} />
        </Col>
        <Col span={12}>
          <TopRight color={color} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <BottomLeft color={color} />
        </Col>
        <Col span={12}>
          <BottomRight color={color} />
        </Col>
      </Row>
    </>
  );
};

export default Exemple1;
