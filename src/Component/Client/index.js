import React, { useEffect, useState } from 'react'
import Header from "../Common/header";
import Footer from "../Common/footer";
import { Button, Card, Input, Modal, Select, Switch, Tooltip } from 'antd';
import { compact } from 'lodash';
import apiInstance from "../Common/apiInstance"
import { TABLE_LIMIT } from '../../Common/constant';
import TableComponent from "../Common/TableComponent";
import ClientModal from "./clientModal"
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { confirm } = Modal;

const Client = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState([]);
    const [editData, setEditData] = useState()
    const [count, setCount] = useState([]);
    const [skip, setSkip] = useState(0); // table skip
    const [page, setPage] = useState(1); // table current page
    const [loading, setLoading] = useState(false);
    const { history } = props;

    useEffect(() => {
        let params = {
            role: "CLIENT",
        }
        apiInstance('/user/list', {
            method: 'GET',
            params: params,
        })
            .then((res) => {
                if (res.status == 200) {
                    console.log(res, 'res')
                    setCount(res.data.count)
                    console.log(res.data.data)
                    setData(res.data.data)
                }
            })
            .catch((err, data) => {
            })
            .finally(() => {
                //   this.setLoading(false);
            });
    }, [])

    const onEditHandle = (data) => {
        setEditData(data)
        setShowModal(true);
    };

    const handleAdd = () => {
        setShowModal(true);
    };

    // set current page for table
    const handlePageChange = (val) => {
        setPage(val);
        const newPage = val - 1;
        setSkip(TABLE_LIMIT * newPage);
    };

    // for delete platform
    const onDeleteHandle = async (values) => {
        confirm({
            title: 'Are you sure you want to delete this Client?',
            okText: 'Yes',
            cancelText: 'No',
            centered: true,
            onOk: () => {
                const variables = { id: values?.id };
                try {
                    //   client.mutate({
                    //     mutation: UPDATE_SENDER,
                    //     variables: variables
                    //   });
                    //   reloadData();
                } catch (error) {
                    return error;
                }
            }
        });
    };

    // set column for table
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            width: '10%'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            width: '10%'
        },
        {
            title: 'Phone No',
            dataIndex: 'phoneNo',
            width: '10%'
        },
        {
            title: 'Action',
            dataIndex: 'id',
            width: '10%',
            render: (value, record) => {
                return (
                    <div className="action-icons">
                        <Tooltip title="Edit">
                            <Button type="link" onClick={() => onEditHandle(record)}>
                                <EditOutlined />
                            </Button>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <Button type="link" danger onClick={() => onDeleteHandle(record)}>
                                <DeleteOutlined />
                            </Button>
                        </Tooltip>
                    </div>
                );
            }
        }
    ];


    return (<React.Fragment>
        <Header />
        <div className="content">
            <ClientModal
                showModal={showModal}
                setShowModal={setShowModal}
                data={editData}
                setData={setEditData}
                isUpdate={!!editData}
            />
            <div className="d-flex">
                <h1>Client</h1>
                <Button onClick={handleAdd}>Add</Button>
            </div>

            <div>
                <TableComponent
                    loading={loading}
                    list={data}
                    columns={columns}
                    current={page}
                    pageSize={TABLE_LIMIT}
                    total={count}
                    handlePageChange={handlePageChange}
                />
            </div>

        </div>
        <Footer />
    </React.Fragment>
    )
}

export default Client
