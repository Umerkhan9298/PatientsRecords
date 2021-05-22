import React from "react";
import { Layout, Menu, Breadcrumb, Button } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const Button = () => {
  return (
    <Layout>
      <Content style={{ padding: "0 50px" }}>
        <Layout style={{ padding: "24px 0" }}>
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
            >
              <Menu.Item key="1">Violet Goodwin</Menu.Item>
              <br />
              <Menu.Item key="2">Mirlam Read</Menu.Item>
            </Menu>
          </Sider>
        </Layout>
      </Content>
    </Layout>
  );
};

export default Button;
