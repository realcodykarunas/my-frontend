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
        <Col span={12} style={{ textAlign: "right" }}>
          <Button>Login</Button>
          <Button>Sign up</Button>
          <Button>Get a quote</Button>
        </Col>
      </Row>
    </HeaderContainer>
  );
};
