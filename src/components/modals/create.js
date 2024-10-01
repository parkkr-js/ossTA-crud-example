import { Modal, Form, Input, Button } from "antd";
import axios from "axios";

const CreateModal = ({ open, onClose }) => {
  const [form] = Form.useForm();

  const handleCreate = async (values) => {
    try {
      await axios.post(
        "https://66fa7fb3afc569e13a9bfcce.mockapi.io/api/BoardEntity",
        {
          ...values,
          createdAt: new Date().toISOString(),
          modifiedAt: new Date().toISOString(),
        }
      );
      form.resetFields();
      onClose();
    } catch (error) {
      console.error("글 작성 중 오류 발생:", error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("글 작성 실ㅍ:", errorInfo);
  };

  return (
    <Modal open={open} title="새 글 작성" onCancel={onClose} footer={null}>
      <Form
        form={form}
        layout="vertical"
        name="createPost"
        onFinish={handleCreate}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="title"
          label="제목"
          rules={[{ required: true, message: "제목을 입력하세요" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="writer"
          label="작성자"
          rules={[{ required: true, message: "작성자를 입력하세요" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="content"
          label="내용"
          rules={[{ required: true, message: "내용을 입력하세요" }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            작성
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateModal;
