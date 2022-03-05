import { Row, Col } from "antd";
import { ShortnerResults } from "../ShortnerResults/ShortnerResults";
import { ShortnerForm } from "./ShortnerForm";
import { Container, Wrapper } from "./styled";

export const Shortner = () => {
  return (
    <Container>
      <Wrapper>
        <Row>
          <Col span={24}>
            <ShortnerForm />
          </Col>
          <Col span={24}>
            <ShortnerResults />
          </Col>
        </Row>
      </Wrapper>
    </Container>
  );
};
