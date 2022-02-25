import { createStore, action, thunk } from 'easy-peasy';

const store = createStore({
    user: {
        email: '',
        password: '',
        loged: false
    },
    loginLoading: false,
    // Actions states
    setStateUser: action((state, action) => {
        const { key, value } = action;
        state.user = { ...state.user, [key]: value }
    }),
    // Actions logics
    loginUser: thunk(async (actions, _, { getStoreState }) => {
        const state = getStoreState();
        const { email, password } = state.user;

        if (email === 'demo_supai@gmail.com' && password === 'secret2022') {
            actions.setStateUser({ key: 'loged', value: true });
            sessionStorage.setItem('checkUser', true);
        }
    })
});

export default store;