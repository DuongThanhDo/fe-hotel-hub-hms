import React, { useState } from 'react';
import { Form, Input, InputNumber, Table } from 'antd';
import { LiaEditSolid } from 'react-icons/lia';
import ModalTable from '../components/common/ModalTable';
import PageHeader from '../components/common/PageHeader';

const initialData = [
    { key: '1', room_number: 'A001', type: '1 giường đôi', price: 200000, status: 'trống' },
    { key: '2', room_number: 'A002', type: '2 giường đơn', price: 250000, status: 'đang thuê' },
    { key: '3', room_number: 'A003', type: '1 giường đơn', price: 150000, status: 'trống' },
    { key: '4', room_number: 'A004', type: '1 giường đôi', price: 200000, status: 'đang dọn' },
    { key: '5', room_number: 'A005', type: '1 giường đôi', price: 200000, status: 'trống' },
    { key: '6', room_number: 'A006', type: '1 giường đôi', price: 200000, status: 'trống' },
    { key: '7', room_number: 'A007', type: '2 giường đơn', price: 250000, status: 'đang thuê' },
    { key: '8', room_number: 'A008', type: '1 giường đơn', price: 150000, status: 'trống' },
    { key: '9', room_number: 'A009', type: '1 giường đôi', price: 200000, status: 'đang dọn' },
    { key: '10', room_number: 'A010', type: '1 giường đôi', price: 200000, status: 'trống' },
    { key: '11', room_number: 'A011', type: '1 giường đôi', price: 200000, status: 'trống' },
    { key: '12', room_number: 'A012', type: '2 giường đơn', price: 250000, status: 'đang thuê' },
    { key: '13', room_number: 'A013', type: '1 giường đơn', price: 150000, status: 'trống' },
    { key: '14', room_number: 'A014', type: '1 giường đôi', price: 200000, status: 'đang dọn' },
    { key: '15', room_number: 'A015', type: '1 giường đôi', price: 200000, status: 'trống' },
    { key: '16', room_number: 'A016', type: '1 giường đơn', price: 150000, status: 'trống' },
    { key: '17', room_number: 'A017', type: '1 giường đôi', price: 200000, status: 'đang dọn' },
    { key: '18', room_number: 'A018', type: '1 giường đôi', price: 200000, status: 'trống' },
    { key: '19', room_number: 'A019', type: '1 giường đôi', price: 200000, status: 'trống' },
    { key: '20', room_number: 'A020', type: '2 giường đơn', price: 250000, status: 'đang thuê' },
    { key: '21', room_number: 'A021', type: '1 giường đơn', price: 150000, status: 'trống' },
    { key: '22', room_number: 'A022', type: '1 giường đôi', price: 200000, status: 'đang dọn' },
    { key: '23', room_number: 'A023', type: '1 giường đôi', price: 200000, status: 'trống' },
];

function Room() {
    const [dataRooms, setDataRooms] = useState(initialData);
    const [openModal, setOpenModal] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [editingRoom, setEditingRoom] = useState(false);
    const [form] = Form.useForm();

    const onSelectChange = (newSelectedRowKeys) => setSelectedRowKeys(newSelectedRowKeys);

    const handleSearch = () => console.log(1);

    const handleAddRoom = () => {
        setOpenModal(true);
        form.setFieldsValue({ key: Math.random(), room_number: '', type: '', price: '', status: 'trống' });
    };

    const handleDeleteRoom = () => {
        setDataRooms(dataRooms.filter((room) => !selectedRowKeys.includes(room.key)));
        setSelectedRowKeys([]);
    };

    const handleEditRoom = (record) => {
        setOpenModal(true);
        setEditingRoom(true);
        form.setFieldsValue(record);
    };

    const handleSaveRoom = () => {
        form.validateFields().then((values) => {
            if (editingRoom) {
                setDataRooms(dataRooms.map((room) => (room.key === values.key ? values : room)));
                setEditingRoom(false);
            } else {
                setDataRooms([...dataRooms, values]);
            }
            form.resetFields();
        });
        setOpenModal(false);
    };

    const columns = [
        { title: 'Số phòng', dataIndex: 'room_number', key: 'room_number' },
        { title: 'Loại phòng', dataIndex: 'type', key: 'type' },
        { title: 'Giá phòng', dataIndex: 'price', key: 'price' },
        { title: 'Trạng thái', dataIndex: 'status', key: 'status' },
        {
            title: '#',
            key: 'action',
            render: (_, record) => (
                <LiaEditSolid className="cursor-pointer text-[20px]" onClick={() => handleEditRoom(record)} />
            ),
        },
    ];

    return (
        <div className="m-4 mb-[100px]">
            <ModalTable
                form={form}
                setOpen={setOpenModal}
                open={openModal}
                handleSave={handleSaveRoom}
                title={editingRoom ? 'Chỉnh sửa phòng' : 'Thêm phòng'}
            >
                <Form.Item name="key" label="Mã phòng" hidden>
                    <Input />
                </Form.Item>
                <Form.Item
                    name="room_number"
                    label="Số phòng"
                    rules={[{ required: true, message: 'Vui lòng nhập số phòng' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="type"
                    label="Loại phòng"
                    rules={[{ required: true, message: 'Vui lòng nhập loại phòng' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="price"
                    label="Giá phòng"
                    rules={[{ required: true, message: 'Vui lòng nhập giá phòng' }]}
                >
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item
                    name="status"
                    label="Trạng thái"
                    rules={[{ required: true, message: 'Vui lòng nhập trạng thái' }]}
                >
                    <Input />
                </Form.Item>
            </ModalTable>

            <PageHeader title="Quản lý phòng" search={handleSearch} add={handleAddRoom} del={handleDeleteRoom} />
            <Table
                rowSelection={{ selectedRowKeys, onChange: onSelectChange }}
                columns={columns}
                dataSource={dataRooms}
                size="middle"
                bordered
            />
        </div>
    );
}

export default Room;
