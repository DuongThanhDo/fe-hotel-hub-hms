import { Table } from 'antd';
import React, { useState } from 'react';
import { BookingCustomer, BookingRoom } from '../components/Bookings';

const Booking = () => {
    const [dataTable, setDataTable] = useState([]);
    const [columnTable, setColumnTable] = useState([]);

    return (
        <div className="m-4">
            <p className="text-[24px] font-semibold mb-4">
                <i>Đặt phòng khách sạn</i>
            </p>

            <div className="w-full h-[calc(100vh-142px)] bg-white flex gap-4 p-4 rounded-lg shadow-xl">
                <Table className="flex-1 h-full" size="middle" bordered columns={columnTable} dataSource={dataTable} />
                <div className="w-[220px] flex flex-col gap-2">
                    <BookingCustomer setDatas={setDataTable} setColumns={setColumnTable} />
                    <BookingRoom setDatas={setDataTable} setColumns={setColumnTable} />
                </div>
            </div>
        </div>
    );
};
export default Booking;
