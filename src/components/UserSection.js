import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Table } from 'antd'
import { EditTwoTone, DeleteTwoTone } from "@ant-design/icons";

const baseURL = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

const UserSection = () => {
    const [masterusers, setMasterusers] = useState(null)
    const [columns, setColumns] = useState([])
    const [selectedRows, setSelectedRows] = useState([])

    useEffect(() => {
        axios.get(baseURL).then((response) =>{ 
            let list = response.data ?? []
            let firstUser = list[0] ?? {}
            const cols = []
            for (const key in firstUser) {
                if (key && key !== "id") {
                    const col = {
                        title: key.toUpperCase() ,
                        dataIndex: key
                    }
                    cols.push(col)
                }
            }
            let finalCol = {
                title: "ACTION",
                render: () => {
                    return (
                        <>
                          <EditTwoTone onClick={() => handleEdit()} /> &nbsp; &nbsp; &nbsp;
                          <DeleteTwoTone onClick={() => handleSingleDelete()} />{" "}
                        </>
                      );
                }
            }
            cols.push(finalCol)
            setColumns(cols)
            setMasterusers(list)})
      }, []) 

  const handleEdit = () => {}
  const handleSingleDelete = () => {}
      
  return (
    <div>
        <Table dataSource={masterusers} columns={columns} pagination={{ position: ["bottomCenter"] }}
        scroll={{ x: 700 }} rowSelection={{
            type: "checkbox",
            onChange: (selectedkeys) => { setSelectedRows(selectedkeys) }
        }}/>
    </div>
  )
}

export default UserSection