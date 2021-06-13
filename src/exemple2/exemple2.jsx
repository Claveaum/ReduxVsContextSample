import { Card, Col, Row } from "antd";

import "./exemple2.css"

const exemple2 = () => {
  return (
    <>
      <Row className="exemple2-first-line">
        <Col span={12}>
          <Card title="Composant 1" className="exemple2-card">Sample 1</Card>
        </Col>
        <Col span={12}>
          <Card title="Composant 2" className="exemple2-card">Sample 2</Card>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Card title="Composant 3" className="exemple2-card">
            Sample 3
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Composant 4" className="exemple2-card">
            Sample 4
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default exemple2;
