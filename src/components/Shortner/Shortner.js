import { Row, Col } from "antd";
import { ShortnerResults } from "../ShortnerResults/ShortnerResults";
import { ShortnerForm } from "./ShortnerForm";
import { Container } from "./styled";

export const Shortner = () => {
  return (
    <Container>
      <Row>
        <Col span={24}>
          <ShortnerForm />
        </Col>
        <Col span={24}>
          <ShortnerResults />
        </Col>
      </Row>
    </Container>
  );
};
