import {
    Row, Col,
    Card,
    Form, Input, Button,
    Typography
} from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
import useLogin from '../../hooks/useLogin';

const { Title } = Typography;

const Login = () => {
    const [ 
        user, setUser, 
        loading, 
        handleLogin 
    ] = useLogin();

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
                                onChange={({target}) => setUser(user => ({...user, email: target.value}))}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input 
                                prefix={<UnlockOutlined />}
                                placeholder='Contraseña' 
                                type="password" 
                                value={user.password}
                                onChange={({target}) => setUser(user => ({...user, password: target.value}))}
                            />
                        </Form.Item>
                        <Button
                            type="primary"
                            onClick={() => handleLogin()} 
                            disabled={user.email && user.password ? false : true} 
                            loading={loading}
                            block
                        >
                            ACCEDER
                        </Button>
                    </Form>
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