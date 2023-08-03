import React, { PropsWithChildren, useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import { COURSE_CATEGORIES, COURSE_DATA } from '../../../config/routers';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];
type MenuItemType = {
    label: string,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItemType[],
    link: string,
}

const menuItemData: Array<MenuItemType> = [
    {
        label: 'Course', key: '1', icon: <PieChartOutlined />, link: '/', children: [
            { label: 'Course Categories', key: 'course-cate', link: COURSE_CATEGORIES },
            { label: 'Course Data', key: 'course-data', link: COURSE_DATA }
        ]
    },
    { label: 'Option 2', key: '2', icon: <DesktopOutlined />, link: '/option-2' },
    {
        label: 'Option sub', key: '3', icon: <DesktopOutlined />, link: '/option-3', children: [
            { label: 'Sub option1', key: 'sub2', link: '/', children: [{ label: 'sub sub123', key: 'xx', link: 'x' }] },
            { label: 'Sub option2', key: 'sub3', link: '/' },
            { label: 'Sub option3', key: 'sub4', link: '/' },
        ]
    }
]

const renderTreeMenu = (dataMenu: Array<MenuItemType>): any => {
    return <>
        {dataMenu.map(item => {
            if (Array.isArray(item.children)) {
                return <Menu.SubMenu key={item.key} title={item.label}>
                    {renderTreeMenu(item.children)}
                </Menu.SubMenu>
            } else {
                return <Menu.Item icon={item.icon} key={item.key}>
                    <Link to={item.link}>
                        {item.label}
                    </Link>
                </Menu.Item>
            }
        })}
    </>
}

function DefaultLayout(props: PropsWithChildren<{ children: React.ReactNode }>) {
    const { children } = props
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                {/* <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} /> */}
                <Menu
                    theme="dark"
                    mode="inline"
                >
                    {renderTreeMenu(menuItemData)}
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content className='m-4'>
                    {children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
}

export default DefaultLayout;