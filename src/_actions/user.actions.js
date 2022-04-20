import { useRecoilState, useSetRecoilState, useResetRecoilState } from 'recoil';

import { history } from '_helpers';
import { authAtom, usersAtom, userAtom } from '_state';
import api from '../config/api/api-client';

export default function useUserActions() {
    const baseUrl = `${process.env.REACT_APP_API_URL}/users`;
    const [auth, setAuth] = useRecoilState(authAtom);
    const setUsers = useSetRecoilState(usersAtom);
    const setUser = useSetRecoilState(userAtom);

    function login({ username, password }) {
        return api.post(`${baseUrl}/authenticate`, { username, password }).then((user) => {
            localStorage.setItem('user', JSON.stringify(user));
            setAuth(user);

            const { from } = history.location.state || { from: { pathname: '/' } };
            history.push(from);
        });
    }

    function logout() {
        localStorage.removeItem('user');
        setAuth(null);
        history.push('/account/login');
    }

    function register(user) {
        return api.post(`${baseUrl}/register`, user);
    }

    function getAll() {
        return api.get(baseUrl).then(setUsers);
    }

    function getById(id) {
        return api.get(`${baseUrl}/${id}`).then(setUser);
    }

    function update(id, params) {
        return api.put(`${baseUrl}/${id}`, params).then((x) => {
            if (id === auth?.id) {
                const user = { ...auth, ...params };
                localStorage.setItem('user', JSON.stringify(user));
                setAuth(user);
            }
            return x;
        });
    }

    function remove(id) {
        setUsers((users) =>
            users.map((x) => {
                if (x.id === id) return { ...x, isDeleting: true };

                return x;
            })
        );

        return api.delete(`${baseUrl}/${id}`).then(() => {
            setUsers((users) => users.filter((x) => x.id !== id));
            if (id === auth?.id) {
                logout();
            }
        });
    }

    return {
        login,
        logout,
        register,
        getAll,
        getById,
        update,
        delete: remove,
        resetUsers: useResetRecoilState(usersAtom),
        resetUser: useResetRecoilState(userAtom)
    };
}
