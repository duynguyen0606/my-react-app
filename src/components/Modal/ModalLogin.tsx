import React, { useMemo } from 'react';
import { Button, Checkbox, Form, Input, Modal, ModalProps } from 'antd';
import { useForm } from 'antd/es/form/Form';


type FieldType = {
    userName?: string;
    password?: string;
    remember?: boolean;
};

const ModalLogin = (props: ModalProps) => {
    const { open, onOk, onCancel, title } = props
    const [form] = useForm()
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const trans = useMemo(() => {
        const userNameLabel = 'Username'
        const passwordLabel = 'Password'
        const userName = 'userName'
        const password = 'password'
        const rememberLabel = 'Remember'
        const remember = false

        return {
            userNameLabel,
            passwordLabel,
            userName,
            password,
            rememberLabel,
            remember
        }
    }, [])

    return <Modal
        open={open}
        onOk={form.submit}
        onCancel={onCancel}
        title={title}
    >
        <Form
            form={form}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label={trans.userNameLabel}
                name={trans.userName}
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label={trans.passwordLabel}
                name={trans.password}
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name={trans.rememberLabel}
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
            >
                <Checkbox value={trans.remember}>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </Modal>

}

export default ModalLogin;