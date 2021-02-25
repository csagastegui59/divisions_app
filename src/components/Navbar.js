import React from "react";
import "./../stylesheets/Navbar.css";
import { Menu, Dropdown, Button, Avatar } from 'antd';
import { Badge } from 'antd';
import { QuestionCircleOutlined, BellFilled, InboxOutlined, DownOutlined } from '@ant-design/icons';

 const menu_models = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/%22%3E">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/%22%3E">
        2nd menu item
      </a>
    </Menu.Item>
  </Menu>
);
  const menu_feedback = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/%22%3E">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/%22%3E">
        2nd menu item
      </a>
    </Menu.Item>
  </Menu>
);
const menu_user = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/%22%3E">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/%22%3E">
        2nd menu item
      </a>
    </Menu.Item>
  </Menu>
);
  function Navbar(){
    return(
      <>
        <div className="Navbar">
          <div className="Navbar__logo">
            <p className="logo">mandü</p>
          </div>
          <Button className="Navbar__button">Dashboard</Button>
          <Button className="Navbar__button">Organización</Button>
          <Dropdown.Button overlay={menu_models} placement="bottomCenter" icon={<DownOutlined /> }>
            Modelos
          </Dropdown.Button>
          <Dropdown.Button overlay={menu_feedback} placement="bottomCenter" icon={<DownOutlined /> }>
            Seguimiento
          </Dropdown.Button>
          <InboxOutlined />
          <QuestionCircleOutlined />
          <a href="#">
            <Badge count={1}>
              <BellFilled />
            </Badge>
          </a>,
          <Avatar style={{ backgroundColor: 'red', verticalAlign: 'middle' }} size="large">
            A
          </Avatar>
          <Dropdown.Button overlay={menu_user} placement="bottomCenter" icon={<DownOutlined /> }>
            Administrador
          </Dropdown.Button>
        </div>
      </>
    )
}

export default Navbar;