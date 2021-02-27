import React, { useState, useEffect } from "react";
import { Table } from "antd";
import reqwest from "reqwest";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: true,
    render: (name) => `${name.first} ${name.last}`,
    width: "20%"
  },
  {
    title: "Gender",
    dataIndex: "gender",
    filters: [
      { text: "Male", value: "male" },
      { text: "Female", value: "female" }
    ],
    width: "20%"
  },
  {
    title: "Email",
    dataIndex: "email"
  }
];

const getRandomuserParams = (params) => ({
  results: params.pagination.pageSize,
  page: params.pagination.current,
  ...params
});

function TableView() {
  const [randomUser, setRandomUser] = useState({
    data: [],
    pagination: {
      current: 1,
      pageSize: 10
    },
    loading: false
  });
  useEffect(() => {
    const { pagination } = randomUser;
    getData({ pagination });
  }, []);
  function handleTableChange(pagination, filters, sorter) {
    getData({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters
    });
  }
  const getData = (params = {}) => {
    setRandomUser({ loading: true });
    reqwest({
      url: "https://randomuser.me/api/",
      method: "get",
      type: "json",
      data: getRandomuserParams(params)
    }).then((data) => {
      setRandomUser({
        loading: false,
        data: data.results,
        pagination: {
          ...params.pagination,
          total: 200
        }
      });
    });
  };
  const { data, pagination, loading } = randomUser;
  return (
    <Table
      columns={columns}
      rowKey={(record) => record.login.uuid}
      dataSource={data}
      pagination={pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  );
}

export default TableView;