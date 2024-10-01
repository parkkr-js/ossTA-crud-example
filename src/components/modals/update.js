import { useEffect } from "react";
import { Modal, Form, Input, Button } from "antd";
import axios from "axios";

const UpdateModal = ({ board, open, onClose }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (board) {
      form.setFieldsValue({
        title: board.title,
        writer: board.writer,
        content: board.content,
      });
    }
  }, [board, form]);

  const handleUpdate = async () => {
    try {
      const values = await form.validateFields();
      await axios.put(
        `https://66fa7fb3afc569e13a9bfcce.mockapi.io/api/BoardEntity/${board.id}`,
        {
          ...values,
          modifiedAt: new Date().toISOString(),
        }
      );
      form.resetFields();
      onClose();
    } catch (error) {
      console.error("글 수정 중 오류 발생:", error);
    }
  };

  return (
    <Modal open={open} title="글 수정" onCancel={onClose} footer={null}>
      <Form
        form={form}
        layout="vertical"
        name="updatePost"
        onFinish={handleUpdate}
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
            수정
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UpdateModal;
