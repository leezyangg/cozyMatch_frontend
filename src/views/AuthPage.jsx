import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const selectUser = (state) => state.auth.user;

const AuthPage = (props) => {
    const user = useSelector(selectUser);

    useEffect(() => {
        const authenticateUser = async () => {
            axios.post(
                'http://localhost:3000/authenticate',
                { username: user.name }

            )
                // eslint-disable-next-line react/prop-types
                .then(r => props.onAuth({ ...r.data, secret: user.name }))

                .catch(e => console.log('error', e))
        };

        authenticateUser();
    }, [user.name, props]);

    return (
        <div>
        </div>
    );
};

export default AuthPage;