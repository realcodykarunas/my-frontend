import { Row, Col, Form, Input, Button } from "antd";

export const ShortnerForm = () => {
  const onFinish = () => {};
  const onFinishFailed = () => {};

  return (
    <Form
      name="basic"
      labelCol={{ span: 0 }}
      wrapperCol={{ span: 24 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Row>
        <Col>
          <Form.Item
            label=""
            name="url"
            rules={[{ required: true, message: "Please input your url" }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Shorten URL
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
