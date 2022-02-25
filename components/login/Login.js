import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {
    Row, Col,
    Card,
    Form, Input, Button,
    Typography
} from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
import { useStoreState, useStoreActions } from 'easy-peasy';

const { Title, Link } = Typography;

const Login = () => {
    const user = useStoreState((state) => state.user);
    const loginLoading = useStoreState((state) => state.loginLoading);

    const setStateUser = useStoreActions((action) => action.setStateUser);
    const loginUser = useStoreActions((action) => action.loginUser);

    const router = useRouter();

    useEffect(() => {
        if (user.loged) {
            router.push('/main');
        }
    });

    return (
        <Row type="flex" align="middle" style={Style.body}>
            <Col span={8} offset={8}>
                <Card>
                    <Row justify='center'>
                        <Col span={6}>
                            <Title level={5}>SUPAI / Login</Title>
                        </Col>
                    </Row>
                    <Form>
                        <Form.Item>
                            <Input 
                                prefix={<UserOutlined />}
                                placeholder='Correo' 
                                value={user.email}
                                onChange={({target}) => setStateUser({ key: 'email', value: target.value})}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input 
                                prefix={<UnlockOutlined />}
                                placeholder='Contraseña' 
                                type="password" 
                                value={user.password}
                                onChange={({target}) => setStateUser({ key: 'password', value: target.value})}
                            />
                        </Form.Item>
                        <Button
                            type="primary"
                            onClick={loginUser} 
                            disabled={user.email && user.password ? false : true} 
                            loading={loginLoading}
                            block
                        >
                            ACCEDER
                        </Button>
                    </Form>
                    <Row>
                        <Col style={{ paddingTop: '9px' }}>
                            <Link href='/'>
                                ¿Olvidó la contraseña?
                            </Link>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    )
}

const Style = {
    body: {
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#eceff1'
    }
}

export default Login;