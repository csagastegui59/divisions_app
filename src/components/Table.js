import React, { useState, useEffect } from "react";
import { Table, Input } from "antd";
import reqwest from "reqwest";

const rowSelection = {
onChange: (selectedRowKeys, selectedRows) => {
  console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
},
onSelect: (record, selected, selectedRows) => {
  console.log(record, selected, selectedRows);
},
onSelectAll: (selected, selectedRows, changeRows) => {
  console.log(selected, selectedRows, changeRows);
},
};

const columns = [
  {
    title: "División",
    dataIndex: "name",
    sorter: true,
    filters: [
      { text: "Strategy", value: "male" },
      { text: "Producto", value: "female" },
      { text: "Dirección general", value: "female" },
      { text: "Operaciones", value: "female" },
      { text: "CEO", value: "female" }
    ],
    render: (name) => `${name.first} ${name.last}`,
    width: "17%"
  },
  {
    title: "División Superior",
    dataIndex: "gender",
    sorter: true,
    filters: [
      { text: "Strategy", value: "male" },
      { text: "Producto", value: "female" },
      { text: "Dirección general", value: "female" },
      { text: "Operaciones", value: "female" },
      { text: "CEO", value: "female" }
    ],
    width: "20%"
  },
  {
    title: "Colaboradores",
    dataIndex: "email",
    sorter: true,
    width: "17%"
  },
  {
    title: "Nivel",
    dataIndex: "email",
    sorter: true,
    filters: [
      { text: "Male", value: "male" },
      { text: "Female", value: "female" }
    ],
    width: "8%"
  },
  {
    title: "Subdivisiones",
    dataIndex: "email",
    sorter: true,
    width: "18%"
  },
  {
    title: "Embajadores",
    dataIndex: "email",
    sorter: true,
    width: "16%"
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
      pageSize: 12
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
  const [checkStrictly] = React.useState(false);
  return (
    <Table
      columns={columns}
      rowSelection={{ ...rowSelection, checkStrictly }}
      rowKey={(record) => record.login.uuid}
      dataSource={data}
      pagination={pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  );
}

export default TableView;