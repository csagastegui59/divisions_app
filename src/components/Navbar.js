import React from "react";
import "./../stylesheets/Navbar.css";
import "./../stylesheets/List.css";
import { Menu, Dropdown, Button, Avatar, Badge } from 'antd';
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
          <div className="rectangle">
            <img src="../assets/mandu.png"/>
          </div>
          <div className="Navbar__logo">
          </div>
          <Button >Dashboard</Button>
          <Button >Organización</Button>
          <Dropdown.Button overlay={menu_models} placement="bottomCenter" icon={<DownOutlined /> }>
            Modelos
          </Dropdown.Button>
          <Dropdown.Button overlay={menu_feedback} placement="bottomCenter" icon={<DownOutlined /> }>
            Seguimiento
          </Dropdown.Button>
          <div className="icons">
            <InboxOutlined className="icon--color icon" />
            <QuestionCircleOutlined className="icon--color icon" />
              <Badge count={1}>
                <BellFilled className="icon--color icon" />
              </Badge>
          </div>
          <div className="Admin">
            <Avatar style={{ backgroundColor: 'red', verticalAlign: 'middle' }} size="large">
              A
            </Avatar>
            <Dropdown.Button overlay={menu_user} placement="bottomCenter" icon={<DownOutlined /> }>
              Administrador
            </Dropdown.Button>
          </div>
        </div>
      </>
    )
}

export default Navbar;