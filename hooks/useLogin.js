import { useRouter } from 'next/router';
import { useState } from 'react';

function useLogin () {
    const [ user, setUser ] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleLogin = async () => {
        const { email, password } = user;

        setLoading(true);

        if (email === 'demo_supai@gmail.com' && password === 'secret2022') {
            localStorage.setItem('user', email);

            router.push('/main');
            
            setLoading(false);
        }
    }

    return [ user, setUser, loading, handleLogin ];
}

export default useLogin;