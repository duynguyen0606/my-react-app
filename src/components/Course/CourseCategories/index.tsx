import { Breadcrumb, Button, Table } from "antd";
import { useState } from "react";
import ModalCreateCourse from "../../Modal/ModalCreateCourse";
import ModalLogin from "../../Modal/ModalLogin";

const dataSource = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
];
function CourseCategories() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = (values: any) => {
        console.log(values)
        // setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return <div>
        <Breadcrumb className='my-4' items={[{ title: 'Home' }, { title: 'Course' }, { title: 'Categories' }]} />
        <Button onClick={() => setIsModalOpen(true)} type="primary">Tạo danh mục</Button>
        <div className='mt-2'>
            <Table dataSource={dataSource} columns={columns} />
        </div>

        <ModalCreateCourse title='CREATE COURSE' open={isModalOpen} onOk={handleOk} onCancel={handleCancel} />
        {/* <ModalLogin title='LOGIN' open={isModalOpen} onOk={handleOk} onCancel={handleCancel} /> */}
    </div>
}

export default CourseCategories;