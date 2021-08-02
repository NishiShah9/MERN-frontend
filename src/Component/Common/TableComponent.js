import { Pagination, Table } from 'antd';
import React from 'react';
import { TABLE_LIMIT } from '../../Common/constant';

const CommonTable = (props) => {
    const { loading, list, columns, current, total, handlePageChange } = props;
    console.log(loading, list, columns, current, total, handlePageChange)
    return (
        <div>
            <Table
                // pagination={false}
                loading={loading}
                dataSource={list}
                columns={columns}
                scroll={{ x: true }}
                rowKey={(val) => (val._id)}
            />
            <div className="pagination">
                <Pagination
                    current={current}
                    pageSize={2}
                    total={total}
                    onChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default CommonTable;
