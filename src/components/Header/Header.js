import { Row, Col, Button, Space } from "antd";
import logo from "../../../public/images/logo.png";
import { HeaderContainer } from "./styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <Row>
        <Col span={4}>
          <img src={logo} alt="" />
        </Col>
        <Col span={12} style={{ textAlign: "left" }}>
          <Space>
            <Button type="text">Features</Button>
            <Button type="text">Domains</Button>
            <Button type="text">Pricing</Button>
            <Button type="text">Enterprise</Button>
          </Space>
        </Col>
        <Col span={8} style={{ textAlign: "right" }}>
          <Space>
            <Button type="text">Login</Button>
            <Button type="text">Sign up</Button>
            <Button type="default">Get a quote</Button>
          </Space>
        </Col>
      </Row>
    </HeaderContainer>
  );
};
