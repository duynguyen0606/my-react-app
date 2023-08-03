import { Button, Form, Input, Modal, ModalProps, } from "antd";
import { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import { useMemo } from "react";
import { convertSlug } from "../../utils";

type ModalCreatePropsType = ModalProps

function ModalCreateCourse(props: ModalCreatePropsType) {
    const { open, onOk, onCancel, title } = props
    const [form] = useForm()
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm();

    const trans = useMemo(() => {
        const titleLabel = 'Title';
        const descriptionLabel = 'Description'
        const slugLabel = 'Slug'
        const title = 'title'
        const description = 'description'
        const slug = 'slug'

        return {
            titleLabel,
            descriptionLabel,
            slugLabel,
            title,
            description,
            slug
        }
    }, [])
    return (
        <Modal title={title} onOk={form.submit} open={open} onCancel={onCancel}>
            <Form
                form={form}
                onFinish={(data) => console.log(data)}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
            >
                <FormItem label={trans.titleLabel} name={trans.title}>
                    <Input onChange={(e) => {
                        form.setFieldsValue({ [trans.slug]: convertSlug(e.target.value) })
                    }} />
                </FormItem>
                <FormItem label={trans.descriptionLabel} name={trans.description}>
                    <Input />
                </FormItem>
                <FormItem label={trans.slugLabel} name={trans.slug}>
                    <Input />
                </FormItem>
            </Form>
        </Modal>
    );
}

export default ModalCreateCourse;