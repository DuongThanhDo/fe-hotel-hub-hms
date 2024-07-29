import React from 'react';
import { Form, Modal } from 'antd';

function ModalTable({ form, open, setOpen, handleSave, title, children, ...props }) {
    const handleCancel = () => setOpen(false);

    return (
        <>
            <Modal
                title={title}
                open={open}
                onOk={handleSave}
                onCancel={handleCancel}
                okText="Xác nhận"
                cancelText="Hủy"
            >
                <Form form={form} layout="vertical">
                    {children}
                </Form>
            </Modal>
        </>
    );
}

export default ModalTable;
