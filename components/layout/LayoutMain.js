import { Layout, Menu, Typography } from 'antd';
import dayjs from 'dayjs';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const LayoutMain = (props) => {
    return (
        <Layout style={ Styles.layoutBody }>
            <Layout>
                <Sider width={200}>
                    <Menu 
                        mode="inline" 
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item>
                            <Title level={5}>Menu</Title>
                        </Menu.Item>
                        <Menu.Item key="1">
                        Principal
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Content style={ Styles.contentBody }>
                        { props.children }
                    </Content>
                    <Footer style={ Styles.footerText }>
                        SUPAI {dayjs().format('YYYY')} / Demo.
                    </Footer>
                </Layout>
            </Layout>
        </Layout>
    )
}

const Styles = {
    layoutBody: { minHeight: '100vh' },
    contentBody: { padding: '30px 30px' },
    footerText: { textAlign: 'center' }
}

export default LayoutMain;