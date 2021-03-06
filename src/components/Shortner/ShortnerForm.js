import { Row, Col, Form, Input, Button } from "antd";
import { useShortner } from "../../hooks/useShortner";

export const ShortnerForm = () => {
  const { handleSubmit, handleError, loading, error } = useShortner();
  const onFinish = (value) => handleSubmit(value);
  const onFinishFailed = (error) => handleError(error);

  return (
    <>
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
          <Col span={18}>
            <Form.Item
              label=""
              name="url"
              rules={[{ required: true, message: "Please input your url" }]}
            >
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                loading={loading}
              >
                Shorten URL
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};
