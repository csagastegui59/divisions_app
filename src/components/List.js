import React from "react";
import "./../stylesheets/Navbar.css";
import "./../stylesheets/List.css";
import { Button, Radio, Dropdown, Input, Menu, Breadcrumb } from "antd";
import {
  PlusSquareFilled,
  UploadOutlined,
  DownloadOutlined,
  DownOutlined,
} from "@ant-design/icons";

const { Search } = Input;
const menu = (
  <Menu>
    <Menu.Item key="1">Columna 1</Menu.Item>
    <Menu.Item key="2">Columna 2</Menu.Item>
    <Menu.Item key="3">Columna 3</Menu.Item>
  </Menu>
);
function List() {
  return (
    <>
      <h3 className="title-padding">Organización</h3>
      <div className="View-menu">
        <div className="View-options">
          <Breadcrumb separator=" ">
            <Breadcrumb.Item href="">Divisiones</Breadcrumb.Item>
            <Breadcrumb.Item className="selected" href="">
              Colaboradores
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="View-buttons">
          <Button className="add-button" icon={<PlusSquareFilled />}></Button>
          <Button className="upload-button" icon={<UploadOutlined />}></Button>
          <Button
            className="download-button"
            icon={<DownloadOutlined />}
          ></Button>
        </div>
      </div>
      <div className="Tree-options">
        <div className="Tree-menu">
          <Radio.Group value="listado">
            <Radio.Button value="listado">Listado</Radio.Button>
            <Radio.Button value="arbol">Arbol</Radio.Button>
          </Radio.Group>
        </div>
        <div className="Search-options">
          <Dropdown overlay={menu}>
            <Button className="columns" >
              Columnas <DownOutlined />
            </Button>
          </Dropdown>
          <Search placeholder="Buscar" allowClear style={{ width: 300 }} />
        </div>
      </div>
    </>
  );
}

export default List;
