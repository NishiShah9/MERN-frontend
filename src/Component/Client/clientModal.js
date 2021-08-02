import { Form, Input, Select } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import { filter, last } from 'lodash';
import apiInstance from "../Common/apiInstance"
import React, { useContext, useState } from 'react';
import { toast } from '../../Common/utils';
import { ROLE_TYPE } from '../../Common/constant';

const { Option } = Select;

const AddClientModal = (props) => {
    const {
        isUpdate,
        showModal,
        setShowModal,
        setData,
        data
    } = props;

    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const handleCancel = () => {
        setShowModal(false);
        form.resetFields();
        setData();
    };

    const onUserSubmitFinish = async (values) => {
        const variables = isUpdate
            ? { ...values, id: data._id }
            : { ...values };
        apiInstance('/user/register', {
            method: 'POST',
            data: variables,
        })
            .then((res) => {
                if (res.status == 200) {
                    debugger
                    toast(res.data.message, 'sucess')
                    setData(res.data.data)
                    form.resetFields();
                    setShowModal(false);
                    props.reloadData();
                }else{
                    debugger
                    toast(res.data.message, 'error')
                }
            })
            .catch((err, data) => {
            })
            .finally(() => {
                //   this.setLoading(false);
            });

    };

    const handleAdd = () => {
        setShowModal(true);
        form.submit();
    };

    return (
        <Modal
            title={isUpdate ? 'Edit Client' : 'Add Client'}
            visible={showModal}
            confirmLoading={loading}
            onOk={handleAdd}
            className="dialog"
            okText={isUpdate ? 'Save' : 'Add'}
            onCancel={handleCancel}
        >
            <Form
                form={form}
                initialValues={data}
                layout="vertical"
                onFinish={onUserSubmitFinish}
            >
                <Form.Item rules={['required']} name="name" label="Name">
                    <Input allowClear placeholder="Enter Name" />
                </Form.Item>
                <Form.Item rules={['required']} name="email" label="Email">
                    <Input allowClear type="email" placeholder="Enter Email" />
                </Form.Item>
                <Form.Item rules={['required']} name="password" label="password">
                    <Input allowClear type="password" placeholder="Enter Password" />
                </Form.Item>
                <Form.Item name="phone" label="Phone">
                    <Input allowClear placeholder="Enter Phone No" />
                </Form.Item>
                <Form.Item name="role" label="Role">
                    <Select placeholder="Select Role" disabled={isUpdate}>
                        {ROLE_TYPE.map((item) => {
                            return (
                                <Option key={item?.value} value={item?.value}>
                                    {item?.label}
                                </Option>
                            );
                        })}
                    </Select>
                </Form.Item>
                <Form.Item name="about" label="About">
                    <Input allowClear placeholder="Enter About" />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddClientModal;
