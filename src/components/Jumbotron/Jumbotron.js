import { Typography, Row } from "antd";
import { Column } from "../Column/Column";
import person from "../../../public/images/person.png";

const { Title, Paragraph } = Typography;

export const Jumbotron = () => (
  <Row>
    <Column>
      <Title level={2}>Your Brand on Your Links</Title>
      <Paragraph>
        Rebrandly is the industry-leading link management platform to brand,
        track and share short URLs using a custom domain name
      </Paragraph>
    </Column>
    <Column>
      <img src={person} alt="person" />
    </Column>
  </Row>
);
