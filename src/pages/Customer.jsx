import React, { useState } from 'react';
import { Table } from 'antd';
import { LiaEditSolid } from 'react-icons/lia';
import PageHeader from '../components/common/PageHeader';

const initialData = [
    {
        key: '1',
        name: 'A001',
        phone: '1 giường đôi',
        address: 200000,
        dob: '1',
        user_name: '2',
        email: '3',
        password: '4',
    },
    {
        key: '2',
        name: 'A002',
        phone: '2 giường đơn',
        address: 250000,
        dob: '1',
        user_name: '2',
        email: '3',
        password: '4',
    },
    {
        key: '3',
        name: 'A003',
        phone: '1 giường đơn',
        address: 150000,
        dob: '1',
        user_name: '2',
        email: '3',
        password: '4',
    },
    {
        key: '4',
        name: 'A004',
        phone: '1 giường đôi',
        address: 200000,
        dob: '1',
        user_name: '2',
        email: '3',
        password: '4',
    },
    {
        key: '5',
        name: 'A005',
        phone: '1 giường đôi',
        address: 200000,
        dob: '1',
        user_name: '2',
        email: '3',
        password: '4',
    },
    {
        key: '6',
        name: 'A006',
        phone: '1 giường đôi',
        address: 200000,
        dob: '1',
        user_name: '2',
        email: '3',
        password: '4',
    },
];

function Customer() {
    const [dataCustomers, setDataCustomers] = useState(initialData);

    const handleSearch = () => {};

    const columns = [
        { title: 'Tên', dataIndex: 'name', key: 'name' },
        { title: 'Số điện thoại', dataIndex: 'phone', key: 'phone' },
        { title: 'Địa chỉ', dataIndex: 'address', key: 'address' },
        { title: 'Ngày sinh', dataIndex: 'dob', key: 'dob' },
        { title: 'Tên người dùng', dataIndex: 'user_name', key: 'user_name' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'Mật khẩu', dataIndex: 'password', key: 'password' },
        {
            title: '#',
            key: 'action',
            render: (_, record) => <LiaEditSolid className="cursor-pointer text-[20px]" />,
        },
    ];
    return (
        <div className='m-4'>
            <PageHeader title="Quản lý khách hàng" search={handleSearch} no />
            <Table
                columns={columns}
                dataSource={dataCustomers}
                size="middle"
                bordered
            />
        </div>
    );
}

export default Customer;
