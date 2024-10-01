import React, { useEffect, useState } from "react";
import axios from "axios";
import { Layout, Typography, Card, Button, Row, Col, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import UpdateModal from "../components/modals/update";
import CreateModal from "../components/modals/create";

const { Title } = Typography;
const { Content, Footer } = Layout;

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      "https://66fa7fb3afc569e13a9bfcce.mockapi.io/api/BoardEntity"
    );
    setPosts(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenUpdateModal = (post) => {
    setSelectedPost(post);
    setOpenUpdateModal(true);
  };

  const handleCloseUpdateModal = () => {
    setOpenUpdateModal(false);
    setSelectedPost(null);
    fetchData();
  };

  const handleOpenCreateModal = () => {
    setOpenCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setOpenCreateModal(false);
    fetchData();
  };

  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(
        `https://66fa7fb3afc569e13a9bfcce.mockapi.io/api/BoardEntity/${postId}`
      );
      fetchData();
    } catch (error) {
      console.error("글 삭제 중 오류 발생:", error);
    }
  };

  return (
    <Layout style={{ minHeight: "100vh", padding: "24px" }}>
      <Row justify="end" style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleOpenCreateModal}
        >
          글 추가
        </Button>
      </Row>

      <Title level={2} style={{ textAlign: "center", marginBottom: 24 }}>
        MockAPI Practice Board
      </Title>

      <Content>
        <Row gutter={[24, 24]}>
          {posts.map((post) => (
            <Col xs={240} sm={12} md={8} key={post.id}>
              <Card
                title={post.title}
                actions={[
                  <EditOutlined
                    key="edit"
                    onClick={() => handleOpenUpdateModal(post)}
                  />,
                  <Popconfirm
                    title="글을 삭제하시겠습니까?"
                    onConfirm={() => handleDeletePost(post.id)}
                    okText="네"
                    cancelText="아니오"
                  >
                    <DeleteOutlined key="delete" />
                  </Popconfirm>,
                ]}
                style={{
                  borderRadius: 10,
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              >
                <p>{post.content}</p>
                <p style={{ color: "gray" }}>작성자: {post.writer}</p>
                <p style={{ color: "gray" }}>생성일: {post.createdAt}</p>
                <p style={{ color: "gray" }}>수정일: {post.modifiedAt}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>

      {selectedPost && (
        <UpdateModal
          board={selectedPost}
          open={openUpdateModal}
          onClose={handleCloseUpdateModal}
        />
      )}

      <CreateModal open={openCreateModal} onClose={handleCloseCreateModal} />
      <Footer style={{ textAlign: "center", marginTop: "24px" }}>
        mockapi-example board ©2024 Created by 박지성 TA for Open Source Studio
        Example Project
      </Footer>
    </Layout>
  );
};

export default Home;
