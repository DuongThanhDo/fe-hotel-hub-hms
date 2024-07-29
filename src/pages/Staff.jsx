import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Form, Input, InputNumber, Table } from 'antd';
import { LiaEditSolid } from 'react-icons/lia';
import ModalTable from '../components/common/ModalTable';

const initialData = [
    {
        key: '1',
        name: 'A001',
        phone: '1 giường đôi',
        address: 200000,
        position: '1',
        user_name: '2',
        email: '3',
        password: '4',
    },
    {
        key: '2',
        name: 'A002',
        phone: '2 giường đơn',
        address: 250000,
        position: '1',
        user_name: '2',
        email: '3',
        password: '4',
    },
    {
        key: '3',
        name: 'A003',
        phone: '1 giường đơn',
        address: 150000,
        position: '1',
        user_name: '2',
        email: '3',
        password: '4',
    },
    {
        key: '4',
        name: 'A004',
        phone: '1 giường đôi',
        address: 200000,
        position: '1',
        user_name: '2',
        email: '3',
        password: '4',
    },
    {
        key: '5',
        name: 'A005',
        phone: '1 giường đôi',
        address: 200000,
        position: '1',
        user_name: '2',
        email: '3',
        password: '4',
    },
    {
        key: '6',
        name: 'A006',
        phone: '1 giường đôi',
        address: 200000,
        position: '1',
        user_name: '2',
        email: '3',
        password: '4',
    },
];

function Staff() {
    const [dataStaffs, setDataStaffs] = useState(initialData);
    const [openModal, setOpenModal] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [editingStaff, setEditingStaff] = useState(false);
    const [form] = Form.useForm();

    const onSelectChange = (newSelectedRowKeys) => setSelectedRowKeys(newSelectedRowKeys);

    const handleSearch = () => console.log(1);

    const handleAddStaff = () => {
        setOpenModal(true);
        form.setFieldsValue({
            key: Math.random(),
            name: '',
            phone: '',
            address: '',
            position: '',
            user_name: '',
            email: '',
            password: '',
        });
    };

    const handleDeleteStaff = () => {
        setDataStaffs(dataStaffs.filter((staff) => !selectedRowKeys.includes(staff.key)));
        setSelectedRowKeys([]);
    };

    const handleEditStaff = (record) => {
        setOpenModal(true);
        setEditingStaff(true);
        form.setFieldsValue(record);
    };

    const handleSaveStaff = () => {
        form.validateFields().then((values) => {
            if (editingStaff) {
                setDataStaffs(dataStaffs.map((staff) => (staff.key === values.key ? values : staff)));
                setEditingStaff(false);
            } else {
                setDataStaffs([...dataStaffs, values]);
            }
            form.resetFields();
        });
        setOpenModal(false);
    };

    const columns = [
        { title: 'Tên', dataIndex: 'name', key: 'name' },
        { title: 'Số điện thoại', dataIndex: 'phone', key: 'phone' },
        { title: 'Địa chỉ', dataIndex: 'address', key: 'address' },
        { title: 'Vị trí làm việc', dataIndex: 'position', key: 'position' },
        { title: 'Tên người dùng', dataIndex: 'user_name', key: 'user_name' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'Mật khẩu', dataIndex: 'password', key: 'password' },
        {
            title: '#',
            key: 'action',
            render: (_, record) => (
                <LiaEditSolid className="cursor-pointer text-[20px]" onClick={() => handleEditStaff(record)} />
            ),
        },
    ];

    return (
        <div className="m-4 mb-[100px]">
            <ModalTable
                form={form}
                setOpen={setOpenModal}
                open={openModal}
                handleSave={handleSaveStaff}
                title={editingStaff ? 'Chỉnh sửa nhân viên' : 'Thêm phòng'}
            >
                <div className="flex justify-between gap-4">
                    <div className="w-full">
                        <p className="font-medium">Tài khoản nhân viên</p>
                        <Form.Item name="key" label="Mã phòng" hidden>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="user_name"
                            label="Tên người dùng"
                            rules={[{ required: true, message: 'Vui lòng nhập tên người dùng' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[{ required: true, message: 'Vui lòng nhập email' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            label="Mật khẩu"
                            rules={[{ required: true, message: 'Vui lòng nhập Mật khẩu' }]}
                        >
                            <Input />
                        </Form.Item>

                        <p className="font-medium">Công việc</p>
                        <Form.Item
                            name="position"
                            label="Vị trí làm việc"
                            rules={[{ required: true, message: 'Vui lòng nhập vị trí làm việc' }]}
                        >
                            <Input />
                        </Form.Item>
                    </div>
                    <div className="w-full">
                        <p className="font-medium">Hồ sơ</p>
                        <Form.Item name="name" label="Tên" rules={[{ required: true, message: 'Vui lòng nhập email' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            label="Số điện thoại"
                            rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}
                        >
                            <InputNumber style={{ width: '100%' }} />
                        </Form.Item>
                        <Form.Item
                            name="address"
                            label="Địa chỉ"
                            rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}
                        >
                            <Input />
                        </Form.Item>
                    </div>
                </div>
            </ModalTable>

            <PageHeader title="Quản lý nhân viên" search={handleSearch} add={handleAddStaff} del={handleDeleteStaff} />
            <Table
                rowSelection={{ selectedRowKeys, onChange: onSelectChange }}
                columns={columns}
                dataSource={dataStaffs}
                size="middle"
                bordered
            />
        </div>
    );
}

export default Staff;
