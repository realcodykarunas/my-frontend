import { Row, Col, Typography } from "antd";

const { Paragraph } = Typography;

export const ShortnerResults = () => {
  const results = "results";

  return (
    <div style={{ backgroundColor: "#fff", color: "#000" }}>
      <Row>
        <Col span={4}>kowit.io</Col>
        <Col span={20}>
          <Row>
            <Col>
              <Paragraph copyable>{results}</Paragraph>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
