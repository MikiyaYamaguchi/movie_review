"use client";

import { Button, ConfigProvider, Form, Input, Select, Space } from "antd";
import jaJP from "antd/es/locale/ja_JP"; // 日本語ロケールのインポート

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

const { Option } = Select;

const Post = () => {
  const [form] = Form.useForm();

  const onGenderChange = (value: string) => {
    switch (value) {
      case "male":
        form.setFieldsValue({ note: "Hi, man!" });
        break;
      case "female":
        form.setFieldsValue({ note: "Hi, lady!" });
        break;
      case "other":
        form.setFieldsValue({ note: "Hi there!" });
        break;
      default:
    }
  };
  return (
    <>
      <h2>映画レビューを投稿する</h2>
      <ConfigProvider locale={jaJP}>
        <Form {...layout} form={form} name="control-hooks">
          <Form.Item
            name="title"
            label="映画タイトル"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="review" label="評価" rules={[{ required: true }]}>
            <Select
              placeholder="選択してください"
              onChange={onGenderChange}
              allowClear
            >
              <Option value="&#9733;">&#9733;</Option>
              <Option value="&#9733;&#9733;">&#9733;&#9733;</Option>
              <Option value="&#9733;&#9733;&#9733;">
                &#9733;&#9733;&#9733;
              </Option>
              <Option value="&#9733;&#9733;&#9733;&#9733;">
                &#9733;&#9733;&#9733;&#9733;
              </Option>
              <Option value="&#9733;&#9733;&#9733;&#9733;&#9733;">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="impression"
            label="感想"
            rules={[{ required: true }]}
          >
            <Input.TextArea rows={8} />
          </Form.Item>
          <Form.Item
            name="highlight"
            label="見どころ"
            rules={[{ required: true }]}
          >
            <Input.TextArea rows={8} />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Space>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </>
  );
};

export default Post;
