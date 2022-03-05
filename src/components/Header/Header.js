import { Row } from "antd";
import Column from "antd/lib/table/Column";
import logo from "../../../public/images/logo.png";

export const Header = () => {
  return (
    <Row>
      <Column>
        <img src={logo} alt="logo" />
        Rebrandly
      </Column>
      <Column></Column>
    </Row>
  );
};
