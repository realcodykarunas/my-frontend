import { Row, Col, Typography } from "antd";
import { Container } from "./styled";

const { Paragraph } = Typography;

export const ShortnerResults = () => {
  const results = "results";

  return (
    <Container>
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
    </Container>
  );
};
