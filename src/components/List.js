import React from "react";
import "./../stylesheets/Navbar.css";
import "./../stylesheets/List.css";
import { Button } from 'antd';
import { PlusSquareFilled, UploadOutlined, DownloadOutlined }from '@ant-design/icons';

function List(){
  return(
    <>
    <div className="List">
      <span>Organización</span>
      <Button className="add-button" icon={<PlusSquareFilled />}></Button>
      <Button className="upload-button" icon={<UploadOutlined />}></Button>
      <Button className="download-button" icon={<DownloadOutlined />}></Button>
    </div>
    </>
  )
}

export default List;