import { StoreProvider } from 'easy-peasy';
import Login from '../components/login/Login';

import store from '../stores/store'

const Index = () => {
    return (
        <StoreProvider store={store}>
            <Login />
        </StoreProvider>
    )
};

export default Index;