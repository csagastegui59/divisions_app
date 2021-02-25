import React from "react";
import "./../stylesheets/Navbar.css";
import { Menu, Dropdown, Button, Avatar } from 'antd';
import { Badge } from 'antd';
import { QuestionCircleOutlined, BellFilled, InboxOutlined } from '@ant-design/icons';

 const menu_modelos = (
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
  const menu_seguimiento = (
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
        <button className="Navbar__button">Dashboard</button>
        <button className="Navbar__button">Organización</button>
        <Dropdown overlay={menu_modelos} placement="bottomLeft" arrow>
        <Button className="Navbar__button">Modelos</Button>
        </Dropdown>
        <Dropdown overlay={menu_seguimiento} placement="bottomLeft" arrow>
        <Button className="Navbar__button">Seguimiento</Button>
        </Dropdown>

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
      <Dropdown overlay={menu_user} placement="bottomLeft" arrow>
        <Button className="Navbar__button">Administrador</Button>
        </Dropdown>
      </div>

        </>
    )
}

export default Navbar;