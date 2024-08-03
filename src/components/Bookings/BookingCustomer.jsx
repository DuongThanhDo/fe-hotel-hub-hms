import React, { useEffect, useState } from 'react';

import { TbEyeEdit, TbEyeExclamation, TbEyePlus } from 'react-icons/tb';
import { Button } from 'antd';
import BookingForm from './BookingForm';

const initialData = [
    { key: '1', name: 'A001', email: '123', phone: '1', status: 'pending' },
    { key: '2', name: 'A001', email: '123', phone: '1', status: 'pending' },
    { key: '3', name: 'A001', email: '123', phone: '1', status: 'confirmed' },
    { key: '4', name: 'A001', email: '123', phone: '1', status: 'confirmed' },
    { key: '5', name: 'A001', email: '123', phone: '1', status: 'confirmed' },
    { key: '6', name: 'A001', email: '123', phone: '1', status: 'confirmed' },
    { key: '7', name: 'A001', email: '123', phone: '1', status: 'ruined' },
    { key: '8', name: 'A001', email: '123', phone: '1', status: 'confirmed' },
];

function BookingCustomer({ setDatas, setColumns }) {
    const [openModal, setOpenModal] = useState(false);
    const [action, setAction] = useState('');

    const handleClickPending = () => {
        setOpenModal(true)
        setAction('pending')
    }

    const handleClickConfirmed = () => {
        setOpenModal(true)
        setAction('confirmed')
    }

    const handleClickRuined = () => {
        setOpenModal(true)
        setAction('ruined')
    }

    const columns = [
        { title: 'Tên', dataIndex: 'name', key: 'name' },
        { title: 'email', dataIndex: 'email', key: 'email' },
        { title: 'Số điện thoại', dataIndex: 'phone', key: 'phone' },
        {
            title: 'Trạng thái',
            key: 'status',
            render: (_, record) => (
                <p>
                    {record.status === 'pending' ? (
                        <p className="text-yellow-400 font-medium">đang chờ</p>
                    ) : record.status === 'confirmed' ? (
                        <p className="text-green-400 font-medium">Đang thuê</p>
                    ) : (
                        <p className="text-red-400 font-medium">Đã hủy</p>
                    )}
                </p>
            ),
        },
        {
            title: '#',
            key: 'action',
            render: (_, record) => (
                <p className="text-[20px]">
                    {record.status === 'pending' ? (
                        <TbEyePlus onClick={handleClickPending} className="cursor-pointer" />
                    ) : record.status === 'confirmed' ? (
                        <TbEyeEdit onClick={handleClickConfirmed} className="cursor-pointer" />
                    ) : (
                        <TbEyeExclamation onClick={handleClickRuined} className="cursor-pointer" />
                    )}
                </p>
            ),
        },
    ];

    useEffect(() => {
        setDatas(initialData);
        setColumns(columns);
    }, []);

    const handleClickAll = () => {
        setDatas(initialData);
        setColumns(columns);
    };

    return (
        <div className="w-full">
            <BookingForm action={action} open={openModal} setOpen={setOpenModal} />
            <Button className="w-full" onClick={handleClickAll}>
                Khách hàng
            </Button>
        </div>
    );
}

export default BookingCustomer;
