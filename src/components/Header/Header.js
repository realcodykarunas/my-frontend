import { Row, Col, Button } from "antd";
import logo from "../../../public/images/logo.png";
import { HeaderContainer } from "./styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <Row>
        <Col span={12}>
          <img src={logo} alt="" />
        </Col>
        <Col span={12}>
          <Row gutter={10} style={{ textAlign: "right" }}>
            <Col>
              <Button>Login</Button>
            </Col>
            <Col>
              <Button>Sign up</Button>
            </Col>
            <Col>
              <Button>Get a quote</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </HeaderContainer>
  );
};
