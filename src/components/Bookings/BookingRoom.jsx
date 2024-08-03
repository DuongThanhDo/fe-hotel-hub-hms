import { Button } from 'antd';
import React from 'react';

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

function BookingRoom({ setDatas, setColumns }) {
    const columns = [
        { title: 'Số phòng', dataIndex: 'room_number', key: 'room_number' },
        { title: 'Loại phòng', dataIndex: 'type', key: 'type' },
        { title: 'Giá phòng', dataIndex: 'price', key: 'price' },
        { title: 'Trạng thái', dataIndex: 'status', key: 'status' },
        {
            title: '#',
            key: 'action',
            render: (_, record) => <p>#</p>,
        },
    ];

    const handleClickAll = () => {
        setDatas(initialData);
        setColumns(columns);
    };

    return (
        <div className='w-full'>
            <Button className='w-full' onClick={handleClickAll}>Phòng</Button>
        </div>
    );
}

export default BookingRoom;
