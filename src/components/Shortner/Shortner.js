import { Row, Col } from "antd";
import { ShortnerForm } from "./ShortnerForm";

export const Shortner = () => {
  return (
    <div>
      <Row>
        <Col>
          <ShortnerForm />
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};
