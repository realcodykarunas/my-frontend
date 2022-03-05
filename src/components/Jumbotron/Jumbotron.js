import { Typography, Row, Col, Button } from "antd";
import { Column } from "../Column/Column";
import person from "../../../public/images/person.png";
import { JumboContainer } from "./styled";

const { Title, Paragraph } = Typography;

export const Jumbotron = () => (
  <JumboContainer>
    <Row>
      <Column>
        <Row gutter={10} style={{ paddingTop: "80px" }}>
          <Col>
            <Title level={2}>Your Brand on Your Links</Title>
          </Col>
          <Col>
            <Paragraph>
              Rebrandly is the industry-leading link management platform to
              brand, track and share short URLs using a custom domain name
            </Paragraph>
          </Col>
          <Col>
            <Row gutter={10}>
              <Col>
                <Button type="primary">Sign up free</Button>
              </Col>
              <Col>
                <Button>Request a demo</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Column>
      <Column>
        <img src={person} alt="person" />
      </Column>
    </Row>
  </JumboContainer>
);
