import { Col } from "antd";
import { useBreakpoints } from "../../hooks/useBreakpoints";

export const Column = ({ children }) => {
  const breakpoints = useBreakpoints();

  return <Col {...breakpoints}>{children}</Col>;
};
