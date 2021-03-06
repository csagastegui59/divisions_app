import React from "react";
import "./../stylesheets/Navbar.css";
import whiteLogo from "../assets/white_logo.svg";
import blackLogo from "../assets/mandu_black.svg";
import image from  "../assets/image3.png";
import { Menu, Dropdown, Button, Avatar, Badge } from 'antd';
import { QuestionCircleOutlined, BellFilled, InboxOutlined, DownOutlined } from '@ant-design/icons';

 const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/%22%3E">
        Divisions
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/%22%3E">
        Clients
      </a>
    </Menu.Item>
  </Menu>
);

  function Navbar(){
    return(
      <>
        <div className="Navbar">
          <div className="first-grid">    
            <img src={whiteLogo} alt="logo" className="white-logo"/>
            <Button >Dashboard</Button>
            <Button >Organización</Button>
            <Dropdown overlay={menu}>
            <Button placement="bottomCenter">
              Modelos <DownOutlined />
            </Button>
            </Dropdown>
            <Dropdown overlay={menu}>
            <Button placement="bottomCenter">
              Modelos <DownOutlined />
            </Button>
            </Dropdown>
          </div>
          <div className="second-grid">
            <div className="icons">
              <InboxOutlined className="icon--color icon--size" />
              <QuestionCircleOutlined className="icon--color icon--size" />
                <Badge count={3}>
                  <BellFilled className="icon--color icon--size" />
                </Badge>
            </div>
            <div className="Admin">
              <Avatar style={{ backgroundImage: {image}, verticalAlign: 'middle' }} size="large">
                A
              </Avatar>
              <Dropdown overlay={menu}>
              <Button placement="bottomCenter">
                Administrador <DownOutlined />
              </Button> 
              </Dropdown>  
              <img src={blackLogo} alt="logo" className="black-logo"/>
            </div>
          </div>
        </div>
      </>
    )
}

export default Navbar;