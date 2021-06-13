import { Card, Col, Row } from "antd";

import "./exemple1.css"

const exemple1 = () => {
  return (
    <>
      <Row className="exemple1-first-line">
        <Col span={12}>
          <Card title="Composant 1" className="exemple1-card">Sample 1</Card>
        </Col>
        <Col span={12}>
          <Card title="Composant 2" className="exemple1-card">Sample 2</Card>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Card title="Composant 3" className="exemple1-card">
            Sample 3
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Composant 4" className="exemple1-card">
            Sample 4
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default exemple1;
